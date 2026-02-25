# Pomodoro Vue

<p align="center">
  Timer Pomodoro com gerenciamento de tarefas, feito com Vue 3 + Vite.
</p>

<p align="center">
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3.5-42b883?style=for-the-badge&logo=vue.js&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7.3-646cff?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-ready-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Concluido-22c55e?style=for-the-badge" />
</p>

---

## Visão Geral

Este projeto é um app de foco no estilo Pomodoro, com uma interface limpa e responsiva para:

- controlar o tempo da sessão;
- selecionar uma tarefa ativa;
- marcar tarefas como concluídas automaticamente ao fim do cronômetro;
- persistir a lista no navegador via `localStorage`;
- tocar um alarme quando a contagem chega a `00:00`.

## Funcionalidades

- Timer com exibição em `MM:SS`.
- Controles de `play`, `pause`, `reset`, `+1 min` e `-1 min`.
- Bloqueios de uso para evitar estados inválidos:
- não inicia com `00:00`;
- não inicia sem tarefa selecionada;
- não incrementa/decrementa durante execução.
- Lista de tarefas com:
- criação de tarefa por botão ou `Enter`;
- prevenção de tarefa duplicada;
- remoção por ícone;
- indicador visual de tarefa concluída.
- Contador de progresso: `concluídas / total`.
- Persistência automática em `localStorage` (`pomodoro_tasks`).
- Alarme sonoro no fim da sessão.

## Stack

- Vue 3 (`<script setup>`, Composition API)
- Vite
- TypeScript
- lucide-vue-next (ícones)
- CSS com variáveis de tema

## Estrutura do Projeto

```text
src/
  assets/
    audio/
    icon/
    theme/theme.css
  components/
    addTask.vue
    taskList.vue
    tasksAmount.vue
    timer.vue
    timerControls.vue
  composables/
    useTasks.ts
  App.vue
  main.js
```

## Arquitetura Rápida

- `App.vue`: orquestra o estado do timer, seleção de tarefa, eventos dos componentes e alarme.
- `useTasks.ts`: lógica de CRUD de tarefas + persistência em `localStorage`.
- `timer.vue`: display do tempo e tarefa ativa.
- `timerControls.vue`: botões de controle do cronômetro.
- `taskList.vue`: renderização da lista, seleção e exclusão.
- `addTask.vue`: formulário de criação de novas tarefas.
- `tasksAmount.vue`: resumo de tarefas concluídas.

## Requisitos

- Node.js `^20.19.0` ou `>=22.12.0`
- npm

## Instalação

```bash
npm install
```

## Scripts

```bash
# desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar build
npm run preview
```

## Como Usar

1. Adicione uma ou mais tarefas.
2. Clique em uma tarefa para selecioná-la no timer.
3. Ajuste os minutos com `+1` e `-1`.
4. Clique em `play` para iniciar.
5. Ao chegar em `00:00`, a tarefa é marcada como concluída e o alarme é disparado.

## Persistência de Dados

As tarefas ficam salvas automaticamente no navegador com a chave:

```text
pomodoro_tasks
```

Ao recarregar a página, os dados são restaurados.

## UI e Tema

O tema está centralizado em [`src/assets/theme/theme.css`](src/assets/theme/theme.css), com variáveis para:

- paleta de cores;
- tipografia;
- ajustes globais de layout.

## Próximos Passos Sugeridos

- Ciclos completos de Pomodoro (foco + pausa curta + pausa longa).
- Histórico de sessões concluídas.
- Edição de tarefas.
- Configuração de duração padrão.
- Notificações desktop.

## Licença

Projeto para fins de estudo e evolução pessoal.  
Se quiser, você pode adicionar uma licença formal como MIT.
