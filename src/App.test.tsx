import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import { App } from './App'

describe('Catálogo inicial', () => {
  test('test_ca_01_abre_diretamente_no_catalogo', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Catálogo' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /entrar/i })).not.toBeInTheDocument()
  })

  test('test_ca_03_filtra_por_nome_e_situacao', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('searchbox'), 'monitor')
    expect(screen.getByRole('heading', { name: 'Monitor LG 27" 4K' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Monitor Dell 24" FHD' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Cabo HDMI 2.1 3m' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Disponíveis' }))
    expect(screen.getByRole('heading', { name: 'Monitor LG 27" 4K' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Monitor Dell 24" FHD' })).not.toBeInTheDocument()
  })

  test('test_ca_05_confirma_solicitacao_e_exibe_toast', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: 'Solicitar empréstimo' })[0])
    expect(screen.getByRole('dialog', { name: 'Solicitar equipamento?' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Confirmar solicitação' }))

    expect(screen.getByRole('status')).toHaveTextContent('foi solicitado')
  })

  test('test_ca_07_estado_vazio_permite_limpar_filtros', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('searchbox'), 'equipamento inexistente')
    expect(screen.getByText('Nenhum equipamento encontrado')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Limpar busca e filtros' }))
    expect(screen.getByRole('heading', { name: 'Notebook Dell Latitude 5450' })).toBeInTheDocument()
  })
})
