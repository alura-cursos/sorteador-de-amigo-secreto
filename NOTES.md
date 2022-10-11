# Some notes about testing with React

## TDD

O desenvolvimento sempre orientado pelos testes. Teste, quebre, conserte, repita.

---

## The AAA pattern (Arrange, Act, Assert)

arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
agimos (realizamos clicks, definimos valores)
afirmamos o que queremos (onde realizamos as expectativas)

---

## Snapshot Testing

Tira como se fosse uma "foto" do componente inteiro e compara com uma foto prévia do mesmo.


## Preciso testar meu Custom Hook, e agora José?

O React só permite a chamada de hooks dentro de components, então quando precisamos testar o comportamento isolado de um determinado hook, é recomendado extrair a lógica dele para uma função pura, possibilitando assim os testes de uma forma mais simples.