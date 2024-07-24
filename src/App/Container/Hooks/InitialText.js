export const initialText = `# Guia de Formatação Markdown

## Introdução
Markdown é uma linguagem de marcação simples usada para formatar texto. É amplamente utilizado para criar documentos, README files, e blogs.

> Vídeo do Youtube: [Markdown // Dicionário do Programador](https://www.youtube.com/watch?v=gFJfyHRKaE0)

## Títulos
Os títulos em Markdown são criados usando o símbolo de hashtag (#). O número de hashtags indica o nível do título.
\`\`\`markdown
# Título 1
## Título 2
### Título 3
\`\`\`

## Estilo do Texto
Você pode aplicar diferentes estilos ao seu texto:
- **Negrito**: Use dois asteriscos ou underscores (\`**texto**\` ou \`__texto__\`).
- *Itálico*: Use um asterisco ou underscore (\`*texto*\` ou \`_texto_\`).
- ~~Riscado~~: Use dois tils (\`~~texto~~\`).

## Citação
Para criar uma citação, use o símbolo de maior que (>).
> Esta é uma citação.

## Listas
Markdown suporta listas ordenadas e não ordenadas.
### Listas não ordenadas:

- Item 1
- Item 2
  - Subitem 2.1

### Listas ordenadas:

1. Primeiro item
2. Segundo item
  1. Subitem
  2. Outro Subitem


## Links
Você pode adicionar links com o seguinte formato:
\`\`\`markdown
[Texto do Link](URL)
\`\`\`
Exemplo: [Google](https://www.google.com)


## Imagens
Para adicionar imagens:
\`\`\`markdown
![Texto Alternativo](URL_da_Imagem)
\`\`\`
Exemplo:

![Exemplo de Imagem](https://placeholder.co/150)

## Tabelas
Você pode criar tabelas com o seguinte formato:
\`\`\`markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Linha 1  | Valor 1  | Valor 2  |
| Linha 2  | Valor 3  | Valor 4  |
\`\`\`

Gera a seguinte tabela:

| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Linha 1  | Valor 1  | Valor 2  |
| Linha 2  | Valor 3  | Valor 4  |

## Código
Você pode citar código inline usando crases (\\\` \\\` ) ou blocos de código usando três crases (\`\`\`).
- Código Inline:

Aqui está um exemplo de \`código inline\`.

- Blocos de Código:
\`\`\`python
# Exemplo de código Python
def exemplo():
    print("Olá, Mundo!")
exemplo()
\`\`\`

\`\`\`javascript
// Exemplo de código JavaScript
function saudacao() {
  console.log('Olá, Mundo!');
}
saudacao();
\`\`\`
`;