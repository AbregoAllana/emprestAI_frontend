import { useMemo, useState } from 'react'
import {
  CatalogHeader,
  EquipmentCard,
  FilterBar,
  LoanDialog,
  Navigation,
  StatusState,
} from './components'
import { equipment, type Equipment, type EquipmentStatus, type Filter } from './data/mock-data'

const currentUser = { name: 'Ana Ribeiro', initials: 'AR', role: 'Operações' }

export function App() {
  const [items, setItems] = useState(equipment)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('Todos')
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null)
  const [toast, setToast] = useState('')

  const availableCount = items.filter((item) => item.status === 'disponivel').length
  const hasOverdueLoan = false
  const activeLoanCount = items.filter((item) => item.loanedTo === currentUser.name).length

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')

    return items.filter((item) => {
      const matchesQuery = [item.name, item.assetTag].some((value) =>
        value.toLocaleLowerCase('pt-BR').includes(normalizedQuery),
      )
      const matchesFilter = filter === 'Todos' || item.status === filterToStatus(filter)
      return matchesQuery && matchesFilter
    })
  }, [filter, items, query])

  function handleRequest(item: Equipment) {
    setSelectedItem(item)
  }

  function confirmRequest() {
    if (!selectedItem) return

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === selectedItem.id
          ? { ...item, status: 'emprestado', loanedTo: currentUser.name, dueDate: '14/09/2026' }
          : item,
      ),
    )
    setSelectedItem(null)
    setToast(`${selectedItem.name} foi solicitado. Devolução até 14/09/2026.`)
    window.setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo principal</a>
      <Navigation currentUser={currentUser} />

      <main id="conteudo-principal" className="page-content catalog-page">
        <CatalogHeader availableCount={availableCount} totalCount={items.length} query={query} onQueryChange={setQuery} />

        {hasOverdueLoan && (
          <aside className="overdue-banner" role="alert">
            <span className="banner-mark" aria-hidden="true">!</span>
            <div>
              <strong>Uma devolução está em atraso.</strong>
              <span>Regularize seu empréstimo antes de solicitar outro equipamento.</span>
            </div>
            <button className="btn btn-secondary banner-action" type="button" onClick={() => setToast('Meus empréstimos será conectado na próxima etapa.')}>Ver empréstimo</button>
          </aside>
        )}

        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        <section className="catalog-section" aria-labelledby="equipment-heading">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Inventário interno</span>
              <h2 id="equipment-heading">Equipamentos para retirada</h2>
            </div>
            <span className="section-count">{filteredItems.length} itens exibidos</span>
          </div>

          {filteredItems.length > 0 ? (
            <div className="catalog-grid" role="list" aria-label="Catálogo de equipamentos">
              {filteredItems.map((item, index) => (
                <EquipmentCard
                  key={item.id}
                  item={item}
                  index={index}
                  blocked={hasOverdueLoan}
                  atLimit={activeLoanCount >= 3}
                  onRequest={handleRequest}
                />
              ))}
            </div>
          ) : (
            <StatusState kind="empty" query={query} onClear={() => { setQuery(''); setFilter('Todos') }} />
          )}
        </section>

        <footer className="page-footer">
          <span>Dados de demonstração · referência 31/08/2026</span>
          <span>Prazo padrão de devolução: 14 dias</span>
        </footer>
      </main>

      {selectedItem && (
        <LoanDialog item={selectedItem} onCancel={() => setSelectedItem(null)} onConfirm={confirmRequest} />
      )}

      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  )
}

function filterToStatus(filter: Filter): EquipmentStatus | null {
  const statusMap: Record<Exclude<Filter, 'Todos'>, EquipmentStatus> = {
    Disponíveis: 'disponivel',
    Emprestados: 'emprestado',
    'Em manutenção': 'manutencao',
  }

  return filter === 'Todos' ? null : statusMap[filter]
}