# Лабораторная работа №1

**Тема:** Порождающий паттерн Builder   
**Дисциплина:** Объектно-ориентированный анализ и проектирование  
**Студент:** Анишко Руслан, 932304  
**Проект:** Character Builder — конструктор персонажей

---

## 1. Цель работы

Изучить и реализовать порождающий паттерн проектирования **Builder**  на примере приложения для создания персонажей. Сравнить реализацию с подходом без применения паттерна.

## 2. Описание предметной области

Приложение **Character Builder** позволяет пользователю создавать персонажей на основе выбранного типа (Рыцарь, Маг, Лучник). Каждый тип автоматически настраивает характеристики, характерные для конкретного персонажа.

Стек технологий:
- **Backend:** C# ASP.NET Core 8 (.NET 8)
- **Frontend:** React 18 + Vite + Pixi.js + TailwindCSS

## 3. Паттерн Builder

**Builder** — порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово. Паттерн даёт возможность использовать один и тот же код конструирования для получения различных представлений объектов.

### 3.1 Участники паттерна

| Роль | Класс / интерфейс | Файл | Описание |
|---|---|---|---|
| **Builder** | `ICharacterBuilder` | `Builders/ICharacterBuilder.cs` | Интерфейс: шаги конструирования персонажа |
| **ConcreteBuilder** | `ArcherBuilder` | `Builders/ArcherBuilder.cs` | Лучник: без оружия |
| **ConcreteBuilder** | `KnightBuilder` | `Builders/KnightBuilder.cs` | Рыцарь: с оружием |
| **ConcreteBuilder** | `MageBuilder` | `Builders/MageBuilder.cs` | Маг: с оружием |
| **Director** | `CharacterDirector` | `Director/CharacterDirector.cs` | Рецепт: `Make` |
| **Product** | `Character` | `Models/Character.cs` | Результат с типом, именем, здоровьем, маной, оружием |
| **Client** | `CharacterBuildClient` | `Client/CharacterBuildClient.cs` | Выбор Builder'а по типу через extension method |

### 3.2 UML-диаграмма классов

На Рисунке 1 представлена UML-диаграмма классов проекта Character Builder, отражающая структуру паттерна Builder. Диаграмма показывает интерфейс `ICharacterBuilder` (Builder), три конкретных строителя — `ArcherBuilder`, `KnightBuilder`, `MageBuilder` (ConcreteBuilder), директора `CharacterDirector` (Director), продукт `Character` (Product) и клиента `CharacterBuildClient`.

Строители реализуют интерфейс `ICharacterBuilder` (связь реализации) и создают объект `Character` через вызов `new Character(...)` в методе `Build()` (зависимость «create»). Директор хранит ссылку на `ICharacterBuilder` и управляет последовательностью вызовов шагов. Клиент `CharacterBuildClient` выбирает нужного строителя через extension method `CreateBuilder()` и передаёт его директору.

![Рисунок 1 — UML-диаграмма классов паттерна Builder (Character Builder)](fe/public/lab1.drawio.png)

*Рисунок 1 — UML-диаграмма классов паттерна Builder*

### 3.3 Связи на диаграмме

- **CharacterBuildClient → CharacterDirector** — ассоциация (поле `_director`)
- **CharacterBuildClient ··→ ICharacterBuilder** — зависимость (extension method `CreateBuilder()`)
- **CharacterDirector → ICharacterBuilder** — ассоциация (поле `_builder`)
- **Archer / Knight / Mage Builder ··▷ ICharacterBuilder** — реализация интерфейса
- **Builders ··→ Character** — зависимость «create» (`new Character(...)` в `Build()`)

## 4. Сравнение подходов

В проекте реализованы два подхода для сравнения:

| Критерий | С паттерном | Без паттерна |
|---|---|---|
| Конструирование | Пошаговое через Builder + Director | Прямое создание объекта Character |
| Расширяемость | Новый Builder — новый класс | Дублирование кода в контроллере |
| Иммутабельность Product | `Character` — readonly свойства | Мутабельный объект |
| Количество методов контроллера | 1 универсальный `CreateCharacterWithBuilder()` | 1 `CreateCharacterWithoutBuilder()` с if-else |

## 5. Структура проекта

```
lab01/
├── builder1/              — Backend с паттерном Builder (C# ASP.NET Core)
└── fe/
    ├── public/
    │   └── lab1.drawio     — UML-диаграмма (Рисунок 1)
    └── src/                — React SPA (презентация + демо)
```

## 6. Запуск

### Backend (порт 5000)
```bash
cd builder1
dotnet run
```

### Frontend
```bash
cd fe
npm install && npm run dev
# http://localhost:5173
```

## 7. Вывод

В ходе выполнения лабораторной работы был реализован порождающий паттерн **Builder** на примере конструктора резюме. Паттерн позволил:
- отделить конструирование сложного объекта `Resume` от его представления;
- создавать различные варианты резюме (IT, Дизайн, Менеджер) с помощью одного и того же процесса конструирования;
- обеспечить иммутабельность и целостность продукта.

Сравнение с реализацией без паттерна наглядно продемонстрировало преимущества Builder в плане расширяемости, устранения дублирования кода и соблюдения принципов SOLID.
