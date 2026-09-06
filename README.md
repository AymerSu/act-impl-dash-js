# Carros Bogotá · Dashboard de flota

Dashboard administrativo responsive para consultar rápidamente el estado de una flota de vehículos. La vista está centrada en métricas operativas y analítica visual, con una interfaz deliberadamente simple: no incluye menú lateral, barra superior, tabla de inventario, controles de exportación, notificaciones ni footer.

## Demo

Repositorio público: [github.com/AymerSu/act-impl-dash-js](https://github.com/AymerSu/act-impl-dash-js)

Para ejecutar el proyecto, abre `index.html` en el navegador. No requiere instalación, servidor ni dependencias externas.

## Tecnologías

- HTML5 semántico con `main`, `section` y `article`.
- CSS3 con variables custom, CSS Grid, Flexbox, media queries y transiciones.
- JavaScript vanilla para la interacción táctil de los módulos.
- Tipografías Manrope y DM Mono desde Google Fonts.

## Componentes actuales

1. **Tarjetas de resumen**: vehículos totales, vehículos disponibles, vehículos en mantenimiento y valor del inventario.
2. **Actividad de la flota**: gráfico semanal de utilización con promedio y variación del periodo.
3. **Estado actual**: gráfico circular con la distribución de vehículos disponibles, en ruta y en mantenimiento.
4. **Resumen operativo**: mensaje visual que indica la salud general de la flota.

## Diseño y layout

La interfaz utiliza un tema oscuro de alto contraste, con fondo azul profundo, paneles oscuros y textos claros. Los acentos tienen significado operativo: verde lima para disponibilidad y crecimiento, coral para mantenimiento y azul para vehículos en ruta.

El layout principal usa CSS Grid con un único espacio de contenido. Las tarjetas y paneles usan Flexbox internamente para alinear métricas, leyendas y controles. Los módulos tienen bordes rectos, sin esquinas redondeadas, y se adaptan a escritorio, tablet y móvil mediante media queries.

## Interacciones

- En escritorio, las tarjetas y paneles aumentan ligeramente de tamaño al pasar el mouse por encima.
- En celulares y tablets, el mismo efecto se activa mientras el usuario mantiene presionado un módulo.
- La transición es sutil para evitar cambios bruscos en la lectura del dashboard.
- `prefers-reduced-motion` desactiva el zoom para usuarios que prefieren reducir el movimiento.

## Accesibilidad

- Jerarquía de headings y landmarks HTML5.
- `role="main"` para identificar el contenido principal.
- `aria-label` para los gráficos y botones de opciones.
- Textos claros sobre fondos oscuros para mejorar el contraste.
- Soporte para `prefers-reduced-motion`.

## Evidencias

| Vista | Captura |
|---|---|
| Escritorio | [`evidencias/dashboard-desktop.png`](evidencias/dashboard-desktop.png) |
| Tablet | [`evidencias/dashboard-tablet.png`](evidencias/dashboard-tablet.png) |
| Móvil | [`evidencias/dashboard-mobile.png`](evidencias/dashboard-mobile.png) |

## Referencias visuales

La composición toma referencias de dashboards operativos modernos y galerías de producto como Dribbble Dashboards: KPI compactos, gráficos de lectura rápida, jerarquía visual clara y una paleta semántica. La implementación es original y está adaptada al seguimiento de una flota vehicular.
