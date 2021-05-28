# Generator functions
En `*function() { ... }` er egentlig bare en funksjon som returnerer en `iterator`
Den pauses ved hver `yield`. Man må kalle `next()` før den går videre. Dersom man 
kaller `next(verdi)` fortsetter kjøringen og utrykket blir erstattet med verdien. 
- `*functions` er stegvis funksjoner
- `async/await` for iteratorer.
- ECMAScript 6

# Redux
Er en forutsigbar måte å håndtere tilstand i JS applikasjoner. 
- Sentralisert/global
- Event-dreven
- Kø basert
- Lett å debugge
- God "separation of concerns"

# Redux sagas
Man bruker ofte sagas på backend uten å tenke så mye over det. En saga er egentlig 
bare en langt-levende transaksjon. En `AWS Step-function` er et eksempel på noe som 
typisk faller inn under definisjonen. I sammenheng med Redux er det egentlig bare det 
samme. Altså en stegvis funksjon som vi bruker for å håndtere `side-effects` som følge
av redux eventer.
- Snugg fit med `*functions`
- En oppskrift på noe som skal utføres
- Blir ferdig en eller annen gang
- Kjører parallelt med andre sagas
- Lett å skrive/lese
- Lett å teste
- Gjenbrukbar
- God "separation of concerns"


# Testing sagas
```JS
import { call, put } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// expects a call instruction
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts should yield an Effect call(Api.fetch, './products')"
)

// create a fake error
const error = {}

// expects a dispatch instruction
assert.deepEqual(
  iterator.throw(error).value,
  put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
  "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
)
```
