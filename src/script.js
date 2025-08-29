'use strict';

// Event Bus (скелет): реалізуйте on/off/emit.

// ВАЖЛИВО: emit має бути асинхронним (через setTimeout), навіть при delay=0.

function createBus() {
  const topics = Object.create(null) // { [topic]: Set<Function> }

  function on(topic, handler) {
    // TODO: 1) Ініціалізувати контейнер підписників для topic
    //       2) Додати handler
    //       3) Повернути функцію відписки
    if (Object.keys(topics).length === 0) {
      topics[topic] = new Set();
      topics[topic].add(handler);
    } else if (Object.keys(topics).length > 0) {
      topics[topic].add(handler);
    }
    return off
  }

  function off(topic = 'news', handler) {
    // TODO: 1) Прибрати handler із теми
    //       2) Видалити тему, якщо підписників не залишилось
    topics[topic].clear();
    if (topics[topic].size === 0) {
      delete topics[topic];
    }
  }

  function emit(topic, payload, delay = 0) {
    // TODO: 1) Використати setTimeout з delay
    //       2) Усередині таймера викликати всіх підписників теми з payload
    //       3) Акуратно обійти ітерацію, якщо під час виклику відбудеться off()
    setTimeout(() => {
      if (!topics[topic]) return;
      const handlers = topics[topic];
      for (const handler of handlers) {
        handler(payload);
      }
    },delay)
  }

  return { on, off, emit };
}

// === ТЕСТ-ХАРНЕСС (НЕ МІНЯТИ, ТІЛЬКИ ЗАПУСКАТИ) ===
// Після реалізації зніміть коментарі та виконайте сценарії нижче по черзі,
// фіксуйте фактичний порядок логів у консолі.

const bus = createBus();

bus.on('tick', (x) => console.log('tick:', x));

bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');
// Очікування: лог хендлера з’являється пізніше за "after schedule".

// const bus = createBus();
//
// bus.on('tick', (x) => {
//   console.log('handler step:', x.step);
//   if (x.step === 1) {
//     bus.emit('tick', { step: 2 }, 0);
//   }
// });
//
// bus.emit('tick', { step: 1 }, 0);
// Завдання: зафіксувати послідовність появи step 1 та step 2
// і пояснити, чому другий виклик приходить пізніше.

// Тому що спочатку виконується по черзі функція з step: 1, а потім вже зі step: 2

// const bus = createBus();
//
// const off = bus.on('news', (x) => {
//   console.log('news:', x);
//   off(); // відписка після першого спрацювання
// });
//
// bus.emit('news', 'A', 0);
// bus.emit('news', 'B', 0);
// Завдання: перевірити, що 'B' більше не доходить до хендлера.

// const bus = createBus();
//
// bus.on('ev', (v) => console.log('h1', v));
// bus.on('ev', (v) => console.log('h2', v));
// bus.on('ev', (v) => console.log('h3', v));
//
// bus.emit('ev', 42, 0);
// Завдання: переконатися, що всі три обробники викликаються у межах одного емісу.


