# Carros Bogotá · Dashboard de inventario

Dashboard administrativo responsive para gestionar el inventario de una flota de vehículos. La interfaz permite consultar el estado de la flota, revisar métricas clave, analizar la utilización semanal y buscar vehículos desde la tabla de inventario.

## Demo

Repositorio público: [github.com/AymerSu/act-impl-dash-js](https://github.com/AymerSu/act-impl-dash-js)

Para ejecutar el proyecto, abre `index.html` en el navegador. No requiere instalación, servidor ni dependencias externas.

## Tecnologías

- HTML5 semántico: `aside`, `header`, `main`, `section`, `article`, `table` y `footer`.
- CSS3: variables custom, CSS Grid, Flexbox, media queries, gradientes y estados interactivos.
- JavaScript vanilla: búsqueda, paginación visual y mensajes de acción.
- Tipografías Manrope y DM Mono desde Google Fonts.

## Componentes principales

1. **Barra lateral**: navegación por áreas del workspace, conteos de inventario y perfil de usuario.
2. **Tarjetas de resumen**: vehículos totales, disponibilidad, mantenimiento y valor del inventario.
3. **Gráfico de actividad**: visualización semanal de la utilización de la flota.
4. **Estado actual**: gráfico de distribución entre vehículos disponibles, en ruta y en mantenimiento.
5. **Tabla de inventario**: búsqueda por vehículo, estado, ubicación y datos de servicio.

## Decisiones de diseño

La dirección visual toma referencias de dashboards operativos modernos: una base oscura para la navegación, un lienzo claro para reducir fatiga visual y colores de acento reservados para datos importantes. El verde lima comunica disponibilidad y crecimiento; el coral señala mantenimiento; el azul identifica vehículos en ruta.

El layout general utiliza `grid-template-areas` para separar header, contenido principal y footer. Dentro de cada componente se usa Flexbox para alinear controles y datos. En móvil la tabla mantiene su legibilidad mediante desplazamiento horizontal y los controles se compactan.

## Accesibilidad

- Jerarquía de headings y landmarks HTML5.
- Roles y etiquetas ARIA en navegación, controles, gráfico y tabla.
- Estados de foco visibles para navegación con teclado.
- Contraste alto en navegación y textos principales.
- `aria-label` para iconos funcionales y descripciones de gráficos.
- Soporte para `prefers-reduced-motion`.

## Evidencias

| Vista | Captura |
|---|---|
| Escritorio | [`evidencias/dashboard-desktop.png`](evidencias/dashboard-desktop.png) |
| Tablet | [`evidencias/dashboard-tablet.png`](evidencias/dashboard-tablet.png) |
| Móvil | [`evidencias/dashboard-mobile.png`](evidencias/dashboard-mobile.png) |

## Referencias visuales

La composición se inspiró en patrones habituales de dashboards de operaciones y en galerías de producto como Dribbble Dashboards: tarjetas de KPI, gráficos de lectura rápida, tablas con filtros y una paleta de estados semánticos. La implementación es original y está adaptada al caso de uso de inventario vehicular.
