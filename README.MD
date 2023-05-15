# Adaptive Tools SCSS

Это инструменты и некоторые конфигурации созданные для упрощения написания адаптивного кода в двух плоскостях

## Структура

В папке **scss** так лежат файлы

- `_data.scss` - брейкпоинты
- `_horizontal.scss` - миксины для работы с горизонтальной версткой
- `_screen.scss` - промежуточный файл для экспорта в js
- `_vertical.scss` - миксины для работы с вертикальной версткой
- `_export.module.scss` - файл для чистого экспорта в js

## Брейкпоинты

Намеренно фиксированный набор переменных под разные экраны

Зарегистрированные размеры:

```ts
type TBreakpointSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
```

```scss
// Extra Small tablets and large smartphones (landscape view)
$xxs: 320;

// Small tablets and large smartphones (landscape view)
$xs: 380;

// Small tablets and large smartphones (landscape view)
$sm: 576;

// Small tablets (portrait view)
$md: 768;

// Tablets and small desktops
$lg: 992;

// Large tablets and medium desktops
$xl: 1200;

// Large desktops
$xxl: 1400;

// Extra Large desktops
$fxl: 1550;

// Full Extra large desktops
$qxl: 1920;

// Ultra  large desktops
$uxl: 2540;

// Extra Ultra desktops
$euxl: 4096;

```

## Применение миксинов

Схема работы:

```scss
    @include
[? vh

]
-
[for | before]

-
[breakpoint] {
  //...
}
```

Где:

- [vh?] - вертикальная ориентация (если не указано то горизонтальная)
- [for | before] - mobile to first или desktop to first
- [breakpoint] - cам брейкпоинт типа `TBreakpointSize`

```scss
    @import 'react-adatptive-tools-scss';

@include for-md {
  width: 20px;
  //...
}

@include for-lg {
  //...
}

@include before-lg {
  //...
}

@include before-xs {
  //...
}

@include vh-before-sm {
  //...
}

@include vh-for-sm {
  //...
}
```

## Хук useBreakpoints

Основан на [react-responsive](https://www.npmjs.com/package/react-responsive)

Так же на борту есть:
`useBreakpoints` - хук который вытягивает текущие брейкпоинты экрана для работы в react.js

Example:

```tsx
    const b = useBreakpoints(); //get breakpoints
if (b?.xs || b['xxl']) { //check breackpoints 
    //...
}
//...
return (
    <div>
        <h1>{title}</h1>
        {/*conditional render*/}
        {b?.sm && <h2>{subtitle}</h2>}
    </div>
)

```

> Хук работает при SSR

## Компоненты

Так же для удобства выведены некоторые компоненты
Которые показывают содержимое только на определенных эндпоинтах
КОмпоненты очень просты в использовании

> For, ForXS, ForSM, ForLG, ForXXXL ...



Пример:

```tsx
    <For size="lg">  {/* size: TBreakpointSize*/}
        <ProfileButton/>
    </For>
    <ForLG>
        <ProfileButton/>
    </ForLG>
    
    <ForXS>
        <ProfileButton/>
    </ForXS>

    //...

    <Before size="lg">  {/* size: TBreakpointSize*/}
        <ProfileButton/>
    </Before>

    <BeforeXS>
        <ProfileButton/>
    </BeforeXS>
    

```

## Перспектива роста

В будущем хотелось бы добавить возможность:

- переопределять переменные **scss**
- конфигурировать название брейкпоинтов?
- отдельная конфигурация брейкпоинтов под вертикальную верстку
- вывести библиотеку react-responsive для кастомного использования в рамках одного пакета
- добавление шаблонов `live templates` под **`webstorm`** для молнейносной верстки
- 
