# Dashboard

- `/`
- statystyki dzisiejszych zamówień (zdalne i lokalne)
- listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
  - kazda kolumna 1 stolik
  - kazdy wiersz 30 minut
  - ma przypominać widok tygodnia w kalandarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
  - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
- zawiera wszystkie informacje dotyczące rezerwacji
- umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
- analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
- analogicznie do powyzszej, dla eventów
- `/tables/events/new`
- analogicznie do powyższej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
- tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego statusu
- `/waiter/order/new`
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
  -zamówienie (zamówione produkty z opcjami i ceną)
- `/waiter/order/:id`
- jak powyższa

# Widok kuchni

- `/kitchen`
- wyswietla listę zamówień w kolejności złożenia
- lista musi zawierać:
  - numer stolika (lun zamówienia zdalnego)
  - pełne informacje dot. zamówionych dań
- na liście musi byc możliwośc oznaczenia zamówienia jako zrealizowanego
