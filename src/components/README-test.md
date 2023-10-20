## Padrão para organizar os testes:


## Estrutura do projeto: 

```tsx 

└── src
    └── componentes
            ├── FormularioParticipante.tsx
            └── FormularioParticipante.teste.tsx

```


Vimos durante a aula que, para adicionar um novo teste, basta criar um função com essa estrutura: 

```tsx

  test('um nome que descreve o que vamos testar', () => {
    
    // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

    // agimos (realizamos clicks, definimos valores)

    // afirmamos o que queremos (onde realizamos as expectativas)

})

```

Esse padrão de organização do teste é conhecido como AAA (Arrange, Act and Assert em inglês).

Arrange = Organizar
Act = Agir
Assert = afirmar



Aqui no nosso sorteador, nós utilizaremos a função `test` em todos os nossos testes, mas ela não é a única.

