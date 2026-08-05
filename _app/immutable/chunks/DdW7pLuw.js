const o=Object.freeze({primary_color:"#e1e1e1",primary_selected:"#b7b5b5",dark_background_color:"#333",warning:"#c37474",item_hover:"rgb(202, 201, 207)",attack_node:"#ffc3c7",card_background_color:"#f8fafc",card_border_color:"rgba(0, 0, 0, 0.16)",default_link:"#005B94"}),e=Object.freeze({primitives:Object.freeze({white:"#fff",black:"black",transparent:"transparent"}),surfaces:Object.freeze({app:o.primary_color,panel:"#fff",quiet:"#f4f4f4",quiet_alt:"#f3f3f3",recessed:"#f2f2f2",subtle:"#f0f0f0",wash:"#fafafa",wash_alt:"#f9f9f9",slate_wash:"#f9fafb",slate_soft:"#f8fafc",panel_cool:"#f6f7fb",selected:o.primary_selected,hover:o.item_hover}),borders:Object.freeze({default:"#ccc",subtle:"#ddd",faint:"#eee",strong:"#888",dark:"#555",black:"black",inverse:"#fff",offensive:"#c63e1fa3",slate_subtle:"#e5e7eb",slate:"#d1d5db",slate_strong:"#cbd5e1",hairline:"rgba(0, 0, 0, 0.12)"}),text:Object.freeze({default:o.dark_background_color,strong:"#111",body:"#222",secondary:"#444",muted:"#555",subdued:"#666",disabled:"#777",inverse:"#fff",black:"black"}),focus:Object.freeze({content_link:o.default_link,control_blue:"#1976d2",control_blue_hover:"#1565c0",dense_control_blue:"#2563eb",ontology_edge:"#0e7490",env_link:"#8fd3ff"}),slate:Object.freeze({50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}),neutrals:Object.freeze({25:"#0a0909",50:"#171717",75:"#282828",100:"#2e2e2e",125:"#303030",150:"#3a3a3a",200:"#717171",250:"#999",300:"#9c9c9c",350:"#a3a3a3",375:"#aaa",400:"#b4b4b4",425:"#bcb8b8",450:"#c9c9c9",475:"#cfcfcf",500:"#dfdfdf",525:"#e2e2e2",550:"#e5e5e5",575:"#e6e6e6",600:"#ededed",625:"#f1f1f1",650:"#f7f7f7",675:"#f8f8f8"}),blue:Object.freeze({50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",500:"#0075FF",700:"#1d4ed8",800:"#1e40af",900:"#0d47a1",ink:"#12263c",ink_soft:"#35506a",ink_muted:"#4f6d87"}),graph:Object.freeze({highlight_fill:"#0993ff2e",highlight_stroke:"#062f4f",danger_stroke:"#f64040",warning_stroke:"#ad7400",muted_fill:"rgb(255, 255, 217)",mermaid_node_fill:"#fff",mermaid_node_border:"#888",mermaid_node_text:"#111",mermaid_edge:o.dark_background_color,mermaid_edge_label_background:"#fff",mermaid_edge_label_text:"#111",mermaid_class_node_text:"#111",mermaid_cluster_fill:"#fafafa",mermaid_cluster_border:"#ccc",mermaid_cluster_text:"#111",mermaid_defensive_fill:"#e8f4ff",mermaid_artifact_fill:"#fff4dd",mermaid_artifact_border:"hsl(40.5882352941,60%,83.3333333333%)",mermaid_vulnerability_fill:"#f9d999",extractor_result:"#9ecae1",tactic:"#dc050c",technique:"#f1932d",subtechnique:"#f7f056",objective:"#90c987",operation:"#7bafde",osapi:"#1965b0",native:"#ae76a3"}),alerts:Object.freeze({info_background:"lightblue",danger_background:"#fee2e2",warning_background:"#ffc107",success_background:"lightgreen"}),controls:Object.freeze({toggle_on_background:"rgb(137, 168, 225)",selected_background:"#2563eb",selected_text:"#fff"}),lookup:Object.freeze({offensive_border:"#c63e1fa3",artifact_border:"hsl(40.5882352941,60%,63%)",defensive_border:"#6b87ad"}),cad:Object.freeze({node_text:"#111",sidebar_toggle_background:"#333",sidebar_toggle_icon:"#fff"}),filters:Object.freeze({item_background:"#f3f3f3",item_text:"#333",item_border:"#888",item_active_background:"#2563eb",item_active_text:"#fff"}),tables:Object.freeze({header_background:"#3a3a3a",row_even_background:"#f9f9f9",row_hover_background:"#f1f1f1"}),brand:Object.freeze({cad_c:"#e62929",cad_c_soft:"rgb(255, 108, 108)",cad_d_soft:"rgb(152, 196, 255)",cad_a_outline:"#475569"}),status:Object.freeze({success:"#2e7d32",success_alt:"#15803d",danger:"#c62828",danger_alt:"#b71c1c",danger_deep:"#b91c1c",warning:"#f57c00",warning_text:"#b35a00",warning_muted:o.warning,danger_icon:"#D32F2F",success_background:"#dcfce7",danger_background:"#fee2e2",warning_highlight:"#ff0",recommendation_highlight:"rgb(236, 233, 62)"}),glows:Object.freeze({success:"#3bf730",focus:"#4d87fa"}),overlays:Object.freeze({clear:"rgba(0, 0, 0, 0)",hairline:"rgba(0, 0, 0, 0.06)",raised:"rgba(0, 0, 0, 0.08)",low:"rgba(0, 0, 0, 0.1)",border:"rgba(0, 0, 0, 0.12)",medium:"rgba(0, 0, 0, 0.18)",card_shadow:"rgba(0, 0, 0, 0.2)",modal_border:"rgba(0, 0, 0, 0.28)",scrim:"rgba(0, 0, 0, 0.3)",backdrop:"rgba(0, 0, 0, 0.35)",modal_backdrop:"rgba(0, 0, 0, 0.5)",heavy_backdrop:"rgba(0, 0, 0, 0.7)",scroll_indicator_clear:"rgba(225, 225, 225, 0)",shadow_low:"rgba(0, 0, 0, 0.06)",shadow_medium:"rgba(0, 0, 0, 0.18)",banner_start:"rgba(0, 0, 0, 0.85)",panel_light:"rgba(255, 255, 255, 0.92)",panel_lighter:"rgba(255, 255, 255, 0.96)",panel_near_opaque:"rgba(255, 255, 255, 0.98)",panel_translucent:"rgba(255, 255, 255, 0.6)"}),shadows:Object.freeze({hsl_color:"220 3% 15%",strength:"3%"})}),a=Object.freeze({"artifact-node":"#fff4dd","agent-node":"#f0e6e6","attack-node":o.attack_node,"condition-node":"#ece6ff","countermeasure-node":"#d6eaff","event-node":"#fff","note-node":"#fafad2","thing-node":"#f4f4f4","vulnerability-node":"#f9d999"}),s=Object.freeze({edge_subclass:"#d07909",edge_implied:"#157f1f",edge_not_implied:"#a61b1b",minimap_background:o.primary_color,minimap_mask:"#ffffff90",minimap_mask_stroke:"#808080",minimap_selected_stroke:"#00008b",note_editor_hover:"#ffffd9",streamed_node_flash:"#8ecdf61f",surface:"#fff",transparent:"#ffffff00"}),z="#C0F4D5",q=Object.freeze({"artifact-node":"--d3fend-cad-node-artifact","agent-node":"--d3fend-cad-node-agent","attack-node":"--d3fend-cad-node-attack","condition-node":"--d3fend-cad-node-condition","countermeasure-node":"--d3fend-cad-node-countermeasure","event-node":"--d3fend-cad-node-event","note-node":"--d3fend-cad-node-note","thing-node":"--d3fend-cad-node-thing","vulnerability-node":"--d3fend-cad-node-vulnerability"}),T=Object.freeze({edge_subclass:"--d3fend-cad-edge-subclass",edge_implied:"--d3fend-graph-edge-implied",edge_not_implied:"--d3fend-graph-edge-not-implied",minimap_background:"--d3fend-graph-minimap-background",minimap_mask:"--d3fend-graph-minimap-mask",minimap_mask_stroke:"--d3fend-graph-minimap-mask-stroke",minimap_selected_stroke:"--d3fend-graph-minimap-selected-stroke",note_editor_hover:"--d3fend-graph-note-editor-hover",streamed_node_flash:"--d3fend-graph-streamed-node-flash",surface:"--d3fend-graph-surface",transparent:"--d3fend-graph-transparent"});function $(r){return Object.freeze(Object.fromEntries(Object.entries(r).map(([n,t])=>[n,`var(${t})`])))}const W=$(q),H=$(T),K="var(--d3fend-mission-activity-node)",N=Object.freeze({"--primary-color":o.primary_color,"--primary-selected":o.primary_selected,"--dark-background-color":o.dark_background_color,"--warning":o.warning,"--item-hover":o.item_hover,"--attack-node":o.attack_node,"--d3fend-color-white":e.primitives.white,"--d3fend-color-black":e.primitives.black,"--d3fend-color-transparent":e.primitives.transparent,"--d3fend-surface-app":e.surfaces.app,"--d3fend-surface-panel":e.surfaces.panel,"--d3fend-surface-quiet":e.surfaces.quiet,"--d3fend-surface-quiet-alt":e.surfaces.quiet_alt,"--d3fend-surface-recessed":e.surfaces.recessed,"--d3fend-surface-subtle":e.surfaces.subtle,"--d3fend-surface-wash":e.surfaces.wash,"--d3fend-surface-wash-alt":e.surfaces.wash_alt,"--d3fend-surface-slate-wash":e.surfaces.slate_wash,"--d3fend-surface-slate-soft":e.surfaces.slate_soft,"--d3fend-surface-panel-cool":e.surfaces.panel_cool,"--d3fend-surface-selected":e.surfaces.selected,"--d3fend-surface-hover":e.surfaces.hover,"--d3fend-border-default":e.borders.default,"--d3fend-border-subtle":e.borders.subtle,"--d3fend-border-faint":e.borders.faint,"--d3fend-border-strong":e.borders.strong,"--d3fend-border-dark":e.borders.dark,"--d3fend-border-black":e.borders.black,"--d3fend-border-inverse":e.borders.inverse,"--d3fend-border-offensive":e.borders.offensive,"--d3fend-border-slate-subtle":e.borders.slate_subtle,"--d3fend-border-slate":e.borders.slate,"--d3fend-border-slate-strong":e.borders.slate_strong,"--d3fend-border-hairline":e.borders.hairline,"--d3fend-text-default":e.text.default,"--d3fend-text-strong":e.text.strong,"--d3fend-text-body":e.text.body,"--d3fend-text-secondary":e.text.secondary,"--d3fend-text-muted":e.text.muted,"--d3fend-text-subdued":e.text.subdued,"--d3fend-text-disabled":e.text.disabled,"--d3fend-text-inverse":e.text.inverse,"--d3fend-text-black":e.text.black,"--d3fend-link-default":e.focus.content_link,"--d3fend-focus-control":e.focus.control_blue,"--d3fend-focus-control-hover":e.focus.control_blue_hover,"--d3fend-focus-dense-control":e.focus.dense_control_blue,"--d3fend-focus-ontology-edge":e.focus.ontology_edge,"--d3fend-env-link":e.focus.env_link,"--d3fend-slate-50":e.slate[50],"--d3fend-slate-100":e.slate[100],"--d3fend-slate-200":e.slate[200],"--d3fend-slate-300":e.slate[300],"--d3fend-slate-400":e.slate[400],"--d3fend-slate-500":e.slate[500],"--d3fend-slate-600":e.slate[600],"--d3fend-slate-700":e.slate[700],"--d3fend-slate-800":e.slate[800],"--d3fend-slate-900":e.slate[900],"--d3fend-neutral-25":e.neutrals[25],"--d3fend-neutral-50":e.neutrals[50],"--d3fend-neutral-75":e.neutrals[75],"--d3fend-neutral-100":e.neutrals[100],"--d3fend-neutral-125":e.neutrals[125],"--d3fend-neutral-150":e.neutrals[150],"--d3fend-neutral-200":e.neutrals[200],"--d3fend-neutral-250":e.neutrals[250],"--d3fend-neutral-300":e.neutrals[300],"--d3fend-neutral-350":e.neutrals[350],"--d3fend-neutral-375":e.neutrals[375],"--d3fend-neutral-400":e.neutrals[400],"--d3fend-neutral-425":e.neutrals[425],"--d3fend-neutral-450":e.neutrals[450],"--d3fend-neutral-475":e.neutrals[475],"--d3fend-neutral-500":e.neutrals[500],"--d3fend-neutral-525":e.neutrals[525],"--d3fend-neutral-550":e.neutrals[550],"--d3fend-neutral-575":e.neutrals[575],"--d3fend-neutral-600":e.neutrals[600],"--d3fend-neutral-625":e.neutrals[625],"--d3fend-neutral-650":e.neutrals[650],"--d3fend-neutral-675":e.neutrals[675],"--d3fend-blue-50":e.blue[50],"--d3fend-blue-100":e.blue[100],"--d3fend-blue-200":e.blue[200],"--d3fend-blue-500":e.blue[500],"--d3fend-blue-700":e.blue[700],"--d3fend-blue-800":e.blue[800],"--d3fend-blue-900":e.blue[900],"--d3fend-blue-ink":e.blue.ink,"--d3fend-blue-ink-soft":e.blue.ink_soft,"--d3fend-blue-ink-muted":e.blue.ink_muted,"--d3fend-graph-highlight-fill":e.graph.highlight_fill,"--d3fend-graph-highlight-stroke":e.graph.highlight_stroke,"--d3fend-graph-danger-stroke":e.graph.danger_stroke,"--d3fend-graph-warning-stroke":e.graph.warning_stroke,"--d3fend-graph-muted-fill":e.graph.muted_fill,"--d3fend-mermaid-node-fill":e.graph.mermaid_node_fill,"--d3fend-mermaid-node-border":e.graph.mermaid_node_border,"--d3fend-mermaid-node-text":e.graph.mermaid_node_text,"--d3fend-mermaid-edge":e.graph.mermaid_edge,"--d3fend-mermaid-edge-label-background":e.graph.mermaid_edge_label_background,"--d3fend-mermaid-edge-label-text":e.graph.mermaid_edge_label_text,"--d3fend-mermaid-class-node-text":e.graph.mermaid_class_node_text,"--d3fend-mermaid-cluster-fill":e.graph.mermaid_cluster_fill,"--d3fend-mermaid-cluster-border":e.graph.mermaid_cluster_border,"--d3fend-mermaid-cluster-text":e.graph.mermaid_cluster_text,"--d3fend-mermaid-defensive-fill":e.graph.mermaid_defensive_fill,"--d3fend-mermaid-defensive-border":e.graph.highlight_stroke,"--d3fend-mermaid-offensive-fill":a["attack-node"],"--d3fend-mermaid-offensive-border":e.graph.danger_stroke,"--d3fend-mermaid-artifact-fill":e.graph.mermaid_artifact_fill,"--d3fend-mermaid-artifact-border":e.graph.mermaid_artifact_border,"--d3fend-mermaid-root-fill":e.graph.mermaid_artifact_fill,"--d3fend-mermaid-root-border":e.borders.dark,"--d3fend-mermaid-inbound-fill":e.graph.mermaid_defensive_fill,"--d3fend-mermaid-vulnerability-fill":e.graph.mermaid_vulnerability_fill,"--d3fend-mermaid-vulnerability-border":e.graph.warning_stroke,"--d3fend-extractor-result":e.graph.extractor_result,"--d3fend-graph-category-tactic":e.graph.tactic,"--d3fend-graph-category-technique":e.graph.technique,"--d3fend-graph-category-subtechnique":e.graph.subtechnique,"--d3fend-graph-category-objective":e.graph.objective,"--d3fend-graph-category-operation":e.graph.operation,"--d3fend-graph-category-osapi":e.graph.osapi,"--d3fend-graph-category-native":e.graph.native,"--d3fend-svelte-flow-background":e.surfaces.panel,"--d3fend-svelte-flow-background-pattern":e.neutrals[425],"--d3fend-svelte-flow-edge":e.borders.strong,"--d3fend-svelte-flow-edge-selected":e.text.strong,"--d3fend-svelte-flow-node-background":e.surfaces.panel,"--d3fend-svelte-flow-node-text":e.text.strong,"--d3fend-svelte-flow-node-border":`1px solid ${e.borders.dark}`,"--d3fend-svelte-flow-handle-background":e.text.strong,"--d3fend-svelte-flow-handle-border":e.surfaces.panel,"--d3fend-svelte-flow-controls-background":e.surfaces.panel,"--d3fend-svelte-flow-controls-background-hover":e.surfaces.quiet,"--d3fend-svelte-flow-controls-text":e.text.strong,"--d3fend-svelte-flow-controls-text-hover":e.text.strong,"--d3fend-svelte-flow-controls-border":e.borders.faint,"--d3fend-svelte-flow-controls-shadow":"0 0 2px 1px rgba(0, 0, 0, 0.08)","--d3fend-svelte-flow-selection-background":"rgba(0, 89, 220, 0.08)","--d3fend-svelte-flow-selection-border":"1px dotted rgba(0, 89, 220, 0.8)","--d3fend-svelte-flow-resize-background":e.focus.control_blue,"--background-color":"var(--d3fend-svelte-flow-background)","--background-pattern-color":"var(--d3fend-svelte-flow-background-pattern)","--controls-button-background-color":"var(--d3fend-svelte-flow-controls-background)","--controls-button-background-color-hover":"var(--d3fend-svelte-flow-controls-background-hover)","--controls-button-color":"var(--d3fend-svelte-flow-controls-text)","--controls-button-color-hover":"var(--d3fend-svelte-flow-controls-text-hover)","--controls-button-border-color":"var(--d3fend-svelte-flow-controls-border)","--xy-background-color":"var(--d3fend-svelte-flow-background)","--xy-background-pattern-color":"var(--d3fend-svelte-flow-background-pattern)","--xy-edge-stroke":"var(--d3fend-svelte-flow-edge)","--xy-edge-stroke-selected":"var(--d3fend-svelte-flow-edge-selected)","--xy-connectionline-stroke":"var(--d3fend-svelte-flow-edge)","--xy-node-background-color":"var(--d3fend-svelte-flow-node-background)","--xy-node-color":"var(--d3fend-svelte-flow-node-text)","--xy-node-border":"var(--d3fend-svelte-flow-node-border)","--xy-handle-background-color":"var(--d3fend-svelte-flow-handle-background)","--xy-handle-border-color":"var(--d3fend-svelte-flow-handle-border)","--xy-controls-button-background-color":"var(--d3fend-svelte-flow-controls-background)","--xy-controls-button-background-color-hover":"var(--d3fend-svelte-flow-controls-background-hover)","--xy-controls-button-color":"var(--d3fend-svelte-flow-controls-text)","--xy-controls-button-color-hover":"var(--d3fend-svelte-flow-controls-text-hover)","--xy-controls-button-border-color":"var(--d3fend-svelte-flow-controls-border)","--xy-controls-box-shadow":"var(--d3fend-svelte-flow-controls-shadow)","--xy-minimap-background-color":"var(--d3fend-graph-minimap-background)","--xy-minimap-mask-background-color":"var(--d3fend-graph-minimap-mask)","--xy-minimap-mask-stroke-color":"var(--d3fend-graph-minimap-mask-stroke)","--xy-minimap-node-background-color":"var(--d3fend-surface-subtle)","--xy-selection-background-color":"var(--d3fend-svelte-flow-selection-background)","--xy-selection-border":"var(--d3fend-svelte-flow-selection-border)","--xy-edge-label-background-color":"var(--d3fend-surface-panel)","--xy-edge-label-color":"var(--d3fend-text-strong)","--xy-resize-background-color":"var(--d3fend-svelte-flow-resize-background)","--d3fend-alert-info-background":e.alerts.info_background,"--d3fend-alert-danger-background":e.alerts.danger_background,"--d3fend-alert-warning-background":e.alerts.warning_background,"--d3fend-alert-success-background":e.alerts.success_background,"--d3fend-toggle-on-background":e.controls.toggle_on_background,"--d3fend-control-selected-background":e.controls.selected_background,"--d3fend-control-selected-text":e.controls.selected_text,"--d3fend-lookup-border-offensive":e.lookup.offensive_border,"--d3fend-lookup-border-artifact":e.lookup.artifact_border,"--d3fend-lookup-border-defensive":e.lookup.defensive_border,"--d3fend-cad-node-text":e.cad.node_text,"--d3fend-cad-sidebar-toggle-background":e.cad.sidebar_toggle_background,"--d3fend-cad-sidebar-toggle-icon":e.cad.sidebar_toggle_icon,"--d3fend-filter-item-background":e.filters.item_background,"--d3fend-filter-item-text":e.filters.item_text,"--d3fend-filter-item-border":e.filters.item_border,"--d3fend-filter-item-active-background":e.filters.item_active_background,"--d3fend-filter-item-active-text":e.filters.item_active_text,"--d3fend-table-header-background":e.tables.header_background,"--d3fend-table-row-even-background":e.tables.row_even_background,"--d3fend-table-row-hover-background":e.tables.row_hover_background,"--d3fend-matrix-branch-background":e.surfaces.panel,"--d3fend-matrix-cell-background":e.surfaces.panel,"--d3fend-matrix-nested-cell-background":e.surfaces.quiet_alt,"--d3fend-matrix-cell-text":e.text.strong,"--d3fend-matrix-cell-border":e.primitives.transparent,"--d3fend-matrix-selected-outline":e.status.danger,"--d3fend-matrix-highlight-outline":e.focus.control_blue,"--d3fend-brand-cad-c":e.brand.cad_c,"--d3fend-brand-cad-c-soft":e.brand.cad_c_soft,"--d3fend-brand-cad-d-soft":e.brand.cad_d_soft,"--d3fend-brand-cad-a-outline":e.brand.cad_a_outline,"--d3fend-status-success":e.status.success,"--d3fend-status-success-alt":e.status.success_alt,"--d3fend-status-danger":e.status.danger,"--d3fend-status-danger-alt":e.status.danger_alt,"--d3fend-status-danger-deep":e.status.danger_deep,"--d3fend-status-warning":e.status.warning,"--d3fend-status-warning-text":e.status.warning_text,"--d3fend-status-warning-muted":e.status.warning_muted,"--d3fend-status-danger-icon":e.status.danger_icon,"--d3fend-status-success-background":e.status.success_background,"--d3fend-status-danger-background":e.status.danger_background,"--d3fend-status-warning-highlight":e.status.warning_highlight,"--d3fend-recommendation-highlight":e.status.recommendation_highlight,"--d3fend-glow-success":e.glows.success,"--d3fend-glow-focus":e.glows.focus,"--d3fend-overlay-clear":e.overlays.clear,"--d3fend-overlay-hairline":e.overlays.hairline,"--d3fend-overlay-raised":e.overlays.raised,"--d3fend-overlay-low":e.overlays.low,"--d3fend-overlay-border":e.overlays.border,"--d3fend-overlay-medium":e.overlays.medium,"--d3fend-overlay-card-shadow":e.overlays.card_shadow,"--d3fend-overlay-modal-border":e.overlays.modal_border,"--d3fend-overlay-scrim":e.overlays.scrim,"--d3fend-overlay-backdrop":e.overlays.backdrop,"--d3fend-overlay-modal-backdrop":e.overlays.modal_backdrop,"--d3fend-overlay-heavy-backdrop":e.overlays.heavy_backdrop,"--d3fend-scroll-indicator-clear":e.overlays.scroll_indicator_clear,"--d3fend-overlay-banner-start":e.overlays.banner_start,"--d3fend-overlay-panel-light":e.overlays.panel_light,"--d3fend-overlay-panel-lighter":e.overlays.panel_lighter,"--d3fend-overlay-panel-near-opaque":e.overlays.panel_near_opaque,"--d3fend-overlay-panel-translucent":e.overlays.panel_translucent,"--d3fend-shadow-color-hsl":e.shadows.hsl_color,"--d3fend-shadow-strength":e.shadows.strength,"--d3fend-cad-node-artifact":a["artifact-node"],"--d3fend-cad-node-agent":a["agent-node"],"--d3fend-cad-node-attack":a["attack-node"],"--d3fend-cad-node-condition":a["condition-node"],"--d3fend-cad-node-countermeasure":a["countermeasure-node"],"--d3fend-cad-node-event":a["event-node"],"--d3fend-cad-node-note":a["note-node"],"--d3fend-cad-node-thing":a["thing-node"],"--d3fend-cad-node-vulnerability":a["vulnerability-node"],"--d3fend-cad-node-artifact-border":"hsl(40.5882352941,60%,83.3333333333%)","--d3fend-cad-edge-subclass":s.edge_subclass,"--d3fend-graph-edge-implied":s.edge_implied,"--d3fend-graph-edge-not-implied":s.edge_not_implied,"--d3fend-graph-minimap-background":s.minimap_background,"--d3fend-graph-minimap-mask":s.minimap_mask,"--d3fend-graph-minimap-mask-stroke":s.minimap_mask_stroke,"--d3fend-graph-minimap-selected-stroke":s.minimap_selected_stroke,"--d3fend-graph-note-editor-hover":s.note_editor_hover,"--d3fend-graph-streamed-node-flash":s.streamed_node_flash,"--d3fend-graph-surface":s.surface,"--d3fend-graph-transparent":s.transparent,"--d3fend-mission-activity-node":z}),m="data-d3fend-theme",w="d3fend.ui.theme",L="d3fendthemechange",u="light",l="system",S=Object.freeze({"--primary-color":"#111827","--primary-selected":"#334155","--dark-background-color":"#e5e7eb","--warning":"#fca5a5","--item-hover":"#243244","--d3fend-surface-app":"#111827","--d3fend-surface-panel":"#1f2937","--d3fend-surface-quiet":"#172033","--d3fend-surface-quiet-alt":"#202b3b","--d3fend-surface-recessed":"#172033","--d3fend-surface-subtle":"#273449","--d3fend-surface-wash":"#0f172a","--d3fend-surface-wash-alt":"#111827","--d3fend-surface-slate-wash":"#111827","--d3fend-surface-slate-soft":"#162033","--d3fend-surface-panel-cool":"#1e293b","--d3fend-surface-selected":"#334155","--d3fend-surface-hover":"#243244","--d3fend-border-default":"#475569","--d3fend-border-subtle":"#334155","--d3fend-border-faint":"#243244","--d3fend-border-strong":"#64748b","--d3fend-border-dark":"#94a3b8","--d3fend-border-black":"#94a3b8","--d3fend-border-inverse":"#0f172a","--d3fend-border-slate-subtle":"#334155","--d3fend-border-slate":"#475569","--d3fend-border-slate-strong":"#64748b","--d3fend-border-hairline":"rgba(255, 255, 255, 0.14)","--d3fend-text-default":"#e5e7eb","--d3fend-text-strong":"#f8fafc","--d3fend-text-body":"#e2e8f0","--d3fend-text-secondary":"#cbd5e1","--d3fend-text-muted":"#94a3b8","--d3fend-text-subdued":"#94a3b8","--d3fend-text-disabled":"#64748b","--d3fend-text-inverse":"#ffffff","--d3fend-text-black":"#f8fafc","--d3fend-link-default":"#7dd3fc","--d3fend-focus-control":"#60a5fa","--d3fend-focus-control-hover":"#93c5fd","--d3fend-focus-dense-control":"#60a5fa","--d3fend-focus-ontology-edge":"#22d3ee","--d3fend-env-link":"#bae6fd","--d3fend-slate-50":"#0f172a","--d3fend-slate-100":"#1e293b","--d3fend-slate-200":"#334155","--d3fend-slate-300":"#475569","--d3fend-slate-400":"#64748b","--d3fend-slate-500":"#94a3b8","--d3fend-slate-600":"#cbd5e1","--d3fend-slate-700":"#e2e8f0","--d3fend-slate-800":"#f1f5f9","--d3fend-slate-900":"#f8fafc","--d3fend-neutral-25":"#f8fafc","--d3fend-neutral-50":"#f1f5f9","--d3fend-neutral-75":"#e5e7eb","--d3fend-neutral-100":"#d1d5db","--d3fend-neutral-125":"#cbd5e1","--d3fend-neutral-150":"#94a3b8","--d3fend-neutral-200":"#64748b","--d3fend-neutral-250":"#475569","--d3fend-neutral-300":"#334155","--d3fend-neutral-350":"#2f3b4f","--d3fend-neutral-375":"#293548","--d3fend-neutral-400":"#243244","--d3fend-neutral-425":"#1f2937","--d3fend-neutral-450":"#1e293b","--d3fend-neutral-475":"#182235","--d3fend-neutral-500":"#172033","--d3fend-neutral-525":"#162033","--d3fend-neutral-550":"#111827","--d3fend-neutral-575":"#0f172a","--d3fend-neutral-600":"#0b1220","--d3fend-neutral-625":"#08111f","--d3fend-neutral-650":"#111827","--d3fend-neutral-675":"#1f2937","--d3fend-blue-50":"#0b2440","--d3fend-blue-100":"#123a63","--d3fend-blue-200":"#1d5f99","--d3fend-blue-500":"#60a5fa","--d3fend-blue-700":"#93c5fd","--d3fend-blue-800":"#bfdbfe","--d3fend-blue-900":"#dbeafe","--d3fend-blue-ink":"#dbeafe","--d3fend-blue-ink-soft":"#bfdbfe","--d3fend-blue-ink-muted":"#93c5fd","--d3fend-alert-info-background":"#123a63","--d3fend-alert-danger-background":"#450a0a","--d3fend-alert-warning-background":"#854d0e","--d3fend-alert-success-background":"#052e16","--d3fend-toggle-on-background":"#60a5fa","--d3fend-control-selected-background":"#2563eb","--d3fend-control-selected-text":"#ffffff","--d3fend-lookup-border-offensive":"#fca5a5","--d3fend-lookup-border-artifact":"#fbbf24","--d3fend-lookup-border-defensive":"#93c5fd","--d3fend-cad-node-text":"#111111","--d3fend-cad-sidebar-toggle-background":"#111827","--d3fend-cad-sidebar-toggle-icon":"#f8fafc","--d3fend-filter-item-background":"#243244","--d3fend-filter-item-text":"#f8fafc","--d3fend-filter-item-border":"#64748b","--d3fend-filter-item-active-background":"#60a5fa","--d3fend-filter-item-active-text":"#0f172a","--d3fend-table-header-background":"#334155","--d3fend-table-row-even-background":"#172033","--d3fend-table-row-hover-background":"#243244","--d3fend-matrix-branch-background":"#243244","--d3fend-matrix-cell-background":"#1f2937","--d3fend-matrix-nested-cell-background":"#172033","--d3fend-matrix-cell-text":"#f8fafc","--d3fend-matrix-selected-outline":"#fca5a5","--d3fend-matrix-highlight-outline":"#60a5fa","--d3fend-svelte-flow-background":"#0f172a","--d3fend-svelte-flow-background-pattern":"#334155","--d3fend-svelte-flow-edge":"#94a3b8","--d3fend-svelte-flow-edge-selected":"#e2e8f0","--d3fend-svelte-flow-node-background":"#1f2937","--d3fend-svelte-flow-node-text":"#f8fafc","--d3fend-svelte-flow-node-border":"1px solid #64748b","--d3fend-svelte-flow-handle-background":"#e2e8f0","--d3fend-svelte-flow-handle-border":"#0f172a","--d3fend-svelte-flow-controls-background":"#1e293b","--d3fend-svelte-flow-controls-background-hover":"#334155","--d3fend-svelte-flow-controls-text":"#f8fafc","--d3fend-svelte-flow-controls-text-hover":"#ffffff","--d3fend-svelte-flow-controls-border":"#475569","--d3fend-svelte-flow-controls-shadow":"0 0 2px 1px rgba(0, 0, 0, 0.38)","--d3fend-svelte-flow-selection-background":"rgba(96, 165, 250, 0.16)","--d3fend-svelte-flow-selection-border":"1px dotted rgba(147, 197, 253, 0.92)","--d3fend-svelte-flow-resize-background":"#60a5fa","--d3fend-cad-node-artifact":a["artifact-node"],"--d3fend-cad-node-agent":a["agent-node"],"--d3fend-cad-node-attack":a["attack-node"],"--d3fend-cad-node-condition":a["condition-node"],"--d3fend-cad-node-countermeasure":a["countermeasure-node"],"--d3fend-cad-node-event":a["event-node"],"--d3fend-cad-node-note":a["note-node"],"--d3fend-cad-node-thing":a["thing-node"],"--d3fend-cad-node-vulnerability":a["vulnerability-node"],"--d3fend-cad-node-artifact-border":"#fbbf24","--d3fend-status-success":"#86efac","--d3fend-status-success-alt":"#4ade80","--d3fend-status-danger":"#fca5a5","--d3fend-status-danger-alt":"#f87171","--d3fend-status-danger-deep":"#fecaca","--d3fend-status-warning":"#fbbf24","--d3fend-status-warning-text":"#fde68a","--d3fend-status-warning-muted":"#fca5a5","--d3fend-status-danger-icon":"#fca5a5","--d3fend-status-success-background":"#052e16","--d3fend-status-danger-background":"#450a0a","--d3fend-recommendation-highlight":"#854d0e","--d3fend-glow-success":"#86efac","--d3fend-glow-focus":"#93c5fd","--d3fend-overlay-clear":"rgba(0, 0, 0, 0)","--d3fend-overlay-hairline":"rgba(255, 255, 255, 0.08)","--d3fend-overlay-raised":"rgba(255, 255, 255, 0.1)","--d3fend-overlay-low":"rgba(255, 255, 255, 0.12)","--d3fend-overlay-border":"rgba(255, 255, 255, 0.14)","--d3fend-overlay-medium":"rgba(255, 255, 255, 0.22)","--d3fend-overlay-card-shadow":"rgba(0, 0, 0, 0.42)","--d3fend-overlay-modal-border":"rgba(255, 255, 255, 0.28)","--d3fend-overlay-scrim":"rgba(0, 0, 0, 0.55)","--d3fend-overlay-backdrop":"rgba(0, 0, 0, 0.62)","--d3fend-overlay-modal-backdrop":"rgba(0, 0, 0, 0.72)","--d3fend-overlay-heavy-backdrop":"rgba(0, 0, 0, 0.85)","--d3fend-scroll-indicator-clear":"rgba(17, 24, 39, 0)","--d3fend-overlay-banner-start":"rgba(0, 0, 0, 0.92)","--d3fend-overlay-panel-light":"rgba(30, 41, 59, 0.92)","--d3fend-overlay-panel-lighter":"rgba(30, 41, 59, 0.96)","--d3fend-overlay-panel-near-opaque":"rgba(30, 41, 59, 0.98)","--d3fend-overlay-panel-translucent":"rgba(30, 41, 59, 0.72)","--d3fend-shadow-color-hsl":"220 40% 2%","--d3fend-shadow-strength":"18%","--d3fend-mermaid-node-fill":"#1f2937","--d3fend-mermaid-node-border":"#64748b","--d3fend-mermaid-node-text":"#f8fafc","--d3fend-mermaid-edge":"#f8fafc","--d3fend-mermaid-edge-label-background":"#172033","--d3fend-mermaid-edge-label-text":"#f8fafc","--d3fend-mermaid-class-node-text":"#111111","--d3fend-mermaid-cluster-fill":"#0f172a","--d3fend-mermaid-cluster-border":"#475569","--d3fend-mermaid-cluster-text":"#f8fafc","--d3fend-mermaid-defensive-fill":a["countermeasure-node"],"--d3fend-mermaid-defensive-border":"#7dd3fc","--d3fend-mermaid-offensive-fill":a["attack-node"],"--d3fend-mermaid-offensive-border":"#fca5a5","--d3fend-mermaid-artifact-fill":e.graph.mermaid_artifact_fill,"--d3fend-mermaid-artifact-border":"#fbbf24","--d3fend-mermaid-root-fill":e.graph.mermaid_artifact_fill,"--d3fend-mermaid-root-border":"#cbd5e1","--d3fend-mermaid-inbound-fill":a["artifact-node"],"--d3fend-mermaid-vulnerability-fill":e.graph.mermaid_vulnerability_fill,"--d3fend-mermaid-vulnerability-border":"#fbbf24","--d3fend-graph-minimap-background":"#111827","--d3fend-graph-minimap-mask":"rgba(148, 163, 184, 0.28)","--d3fend-graph-minimap-mask-stroke":"#475569","--d3fend-graph-minimap-selected-stroke":"#93c5fd","--d3fend-graph-surface":"#1f2937","--d3fend-mission-activity-node":z}),A=Object.freeze({"--primary-color":"#050505","--primary-selected":"#ffdd00","--dark-background-color":"#f7f7f2","--warning":"#ffdd00","--item-hover":"#262626","--d3fend-surface-app":"#050505","--d3fend-surface-panel":"#111111","--d3fend-surface-quiet":"#181818","--d3fend-surface-quiet-alt":"#202020","--d3fend-surface-recessed":"#181818","--d3fend-surface-subtle":"#1f1f1f","--d3fend-surface-wash":"#0a0a0a","--d3fend-surface-wash-alt":"#111111","--d3fend-surface-slate-wash":"#111111","--d3fend-surface-slate-soft":"#181818","--d3fend-surface-panel-cool":"#141414","--d3fend-surface-selected":"#ffdd00","--d3fend-surface-hover":"#262626","--d3fend-border-default":"#f7f7f2","--d3fend-border-subtle":"#c9c9c9","--d3fend-border-faint":"#767676","--d3fend-border-strong":"#ffffff","--d3fend-border-dark":"#ffffff","--d3fend-border-black":"#ffffff","--d3fend-border-inverse":"#050505","--d3fend-border-slate-subtle":"#767676","--d3fend-border-slate":"#c9c9c9","--d3fend-border-slate-strong":"#ffffff","--d3fend-border-hairline":"rgba(255, 255, 255, 0.34)","--d3fend-text-default":"#f7f7f2","--d3fend-text-strong":"#ffffff","--d3fend-text-body":"#f7f7f2","--d3fend-text-secondary":"#e5e5dc","--d3fend-text-muted":"#c9c9c9","--d3fend-text-subdued":"#c9c9c9","--d3fend-text-disabled":"#8f8f8f","--d3fend-text-inverse":"#050505","--d3fend-text-black":"#ffffff","--d3fend-link-default":"#8fd3ff","--d3fend-focus-control":"#ffdd00","--d3fend-focus-control-hover":"#fff299","--d3fend-focus-dense-control":"#ffdd00","--d3fend-focus-ontology-edge":"#7dd3fc","--d3fend-env-link":"#8fd3ff","--d3fend-blue-50":"#082f49","--d3fend-blue-100":"#075985","--d3fend-blue-200":"#0ea5e9","--d3fend-blue-500":"#8fd3ff","--d3fend-blue-700":"#bae6fd","--d3fend-blue-800":"#e0f2fe","--d3fend-blue-900":"#f0f9ff","--d3fend-blue-ink":"#f0f9ff","--d3fend-blue-ink-soft":"#e0f2fe","--d3fend-blue-ink-muted":"#bae6fd","--d3fend-alert-info-background":"#082f49","--d3fend-alert-danger-background":"#7f1d1d","--d3fend-alert-warning-background":"#713f12","--d3fend-alert-success-background":"#064e3b","--d3fend-toggle-on-background":"#ffdd00","--d3fend-control-selected-background":"#ffdd00","--d3fend-control-selected-text":"#050505","--d3fend-lookup-border-offensive":"#ff8a8a","--d3fend-lookup-border-artifact":"#ffdd00","--d3fend-lookup-border-defensive":"#8fd3ff","--d3fend-cad-node-text":"#ffffff","--d3fend-cad-sidebar-toggle-background":"#050505","--d3fend-cad-sidebar-toggle-icon":"#ffffff","--d3fend-filter-item-background":"#181818","--d3fend-filter-item-text":"#ffffff","--d3fend-filter-item-border":"#ffffff","--d3fend-filter-item-active-background":"#ffdd00","--d3fend-filter-item-active-text":"#050505","--d3fend-table-header-background":"#1f2937","--d3fend-table-row-even-background":"#151515","--d3fend-table-row-hover-background":"#262626","--d3fend-matrix-branch-background":"#111111","--d3fend-matrix-cell-background":"#050505","--d3fend-matrix-nested-cell-background":"#181818","--d3fend-matrix-cell-text":"#ffffff","--d3fend-matrix-cell-border":"#ffffff","--d3fend-matrix-selected-outline":"#ffdd00","--d3fend-matrix-highlight-outline":"#8fd3ff","--d3fend-svelte-flow-background":"#050505","--d3fend-svelte-flow-background-pattern":"#767676","--d3fend-svelte-flow-edge":"#ffffff","--d3fend-svelte-flow-edge-selected":"#ffdd00","--d3fend-svelte-flow-node-background":"#111111","--d3fend-svelte-flow-node-text":"#ffffff","--d3fend-svelte-flow-node-border":"1px solid #ffffff","--d3fend-svelte-flow-handle-background":"#ffdd00","--d3fend-svelte-flow-handle-border":"#050505","--d3fend-svelte-flow-controls-background":"#111111","--d3fend-svelte-flow-controls-background-hover":"#262626","--d3fend-svelte-flow-controls-text":"#ffffff","--d3fend-svelte-flow-controls-text-hover":"#ffdd00","--d3fend-svelte-flow-controls-border":"#ffffff","--d3fend-svelte-flow-controls-shadow":"0 0 0 1px #ffffff","--d3fend-svelte-flow-selection-background":"rgba(255, 221, 0, 0.22)","--d3fend-svelte-flow-selection-border":"1px dotted rgba(255, 221, 0, 0.98)","--d3fend-svelte-flow-resize-background":"#ffdd00","--d3fend-cad-node-artifact":"#261f00","--d3fend-cad-node-agent":"#2a1419","--d3fend-cad-node-attack":"#4a1111","--d3fend-cad-node-condition":"#1f1640","--d3fend-cad-node-countermeasure":"#082f49","--d3fend-cad-node-event":"#050505","--d3fend-cad-node-note":"#302800","--d3fend-cad-node-thing":"#111111","--d3fend-cad-node-vulnerability":"#3f2600","--d3fend-cad-node-artifact-border":"#ffdd00","--d3fend-status-success":"#3ff27f","--d3fend-status-success-alt":"#3ff27f","--d3fend-status-danger":"#ff6b6b","--d3fend-status-danger-alt":"#ff8a8a","--d3fend-status-danger-deep":"#ffb4b4","--d3fend-status-warning":"#ffdd00","--d3fend-status-warning-text":"#ffdd00","--d3fend-status-warning-muted":"#ff8a8a","--d3fend-status-danger-icon":"#ff6b6b","--d3fend-status-success-background":"#064e3b","--d3fend-status-danger-background":"#7f1d1d","--d3fend-recommendation-highlight":"#713f12","--d3fend-glow-success":"#3ff27f","--d3fend-glow-focus":"#ffdd00","--d3fend-overlay-clear":"rgba(0, 0, 0, 0)","--d3fend-overlay-hairline":"rgba(255, 255, 255, 0.16)","--d3fend-overlay-raised":"rgba(255, 255, 255, 0.22)","--d3fend-overlay-low":"rgba(255, 255, 255, 0.24)","--d3fend-overlay-border":"rgba(255, 255, 255, 0.34)","--d3fend-overlay-medium":"rgba(255, 255, 255, 0.42)","--d3fend-overlay-card-shadow":"rgba(0, 0, 0, 0.6)","--d3fend-overlay-modal-border":"rgba(255, 255, 255, 0.5)","--d3fend-overlay-scrim":"rgba(0, 0, 0, 0.72)","--d3fend-overlay-backdrop":"rgba(0, 0, 0, 0.72)","--d3fend-overlay-modal-backdrop":"rgba(0, 0, 0, 0.82)","--d3fend-overlay-heavy-backdrop":"rgba(0, 0, 0, 0.9)","--d3fend-scroll-indicator-clear":"rgba(5, 5, 5, 0)","--d3fend-overlay-banner-start":"rgba(0, 0, 0, 0.96)","--d3fend-overlay-panel-light":"rgba(17, 17, 17, 0.92)","--d3fend-overlay-panel-lighter":"rgba(17, 17, 17, 0.96)","--d3fend-overlay-panel-near-opaque":"rgba(17, 17, 17, 0.98)","--d3fend-overlay-panel-translucent":"rgba(17, 17, 17, 0.78)","--d3fend-shadow-color-hsl":"0 0% 0%","--d3fend-shadow-strength":"22%","--d3fend-mermaid-node-fill":"#050505","--d3fend-mermaid-node-border":"#ffffff","--d3fend-mermaid-node-text":"#ffffff","--d3fend-mermaid-edge":"#ffffff","--d3fend-mermaid-edge-label-background":"#111111","--d3fend-mermaid-edge-label-text":"#ffffff","--d3fend-mermaid-class-node-text":"#ffffff","--d3fend-mermaid-cluster-fill":"#0a0a0a","--d3fend-mermaid-cluster-border":"#ffdd00","--d3fend-mermaid-cluster-text":"#ffffff","--d3fend-mermaid-defensive-fill":"#082f49","--d3fend-mermaid-defensive-border":"#8fd3ff","--d3fend-mermaid-offensive-fill":"#4a1111","--d3fend-mermaid-offensive-border":"#ff8a8a","--d3fend-mermaid-artifact-fill":"#261f00","--d3fend-mermaid-artifact-border":"#ffdd00","--d3fend-mermaid-root-fill":"#050505","--d3fend-mermaid-root-border":"#ffdd00","--d3fend-mermaid-inbound-fill":"#082f49","--d3fend-mermaid-vulnerability-fill":"#3f2600","--d3fend-mermaid-vulnerability-border":"#ffdd00","--d3fend-graph-minimap-background":"#050505","--d3fend-graph-minimap-mask":"rgba(255, 221, 0, 0.22)","--d3fend-graph-minimap-mask-stroke":"#ffdd00","--d3fend-graph-minimap-selected-stroke":"#8fd3ff","--d3fend-graph-surface":"#111111","--d3fend-mission-activity-node":"#064e3b"});function v(r={}){return Object.freeze({...N,...r})}const f=Object.freeze({light:v(),dark:v(S),contrast:v(A)}),h=Object.freeze({light:"light",dark:"dark",contrast:"dark"}),k=Object.freeze(Object.fromEntries(Object.entries(f).map(([r,n])=>[r,n["--d3fend-surface-app"]]))),y=Object.freeze(Object.keys(f)),C=Object.freeze([...y,l]),P=Object.freeze({light:"Light",dark:"Dark",contrast:"High contrast",[l]:"System"}),G=Object.freeze({light:"Default D3FEND site palette.",dark:"Lower-light interface for darker viewing contexts.",contrast:"High contrast surfaces and controls.",[l]:"Follow this browser's color scheme preference."}),Q=Object.freeze({light:Object.freeze({start:f.light["--d3fend-surface-panel"],end:f.light["--d3fend-surface-app"]}),dark:Object.freeze({start:f.dark["--d3fend-surface-panel"],end:f.dark["--d3fend-surface-app"]}),contrast:Object.freeze({start:f.contrast["--d3fend-surface-app"],end:f.contrast["--d3fend-focus-control"]}),[l]:Object.freeze({start:f.light["--d3fend-surface-panel"],end:f.dark["--d3fend-surface-app"]})}),c=f.light,U=Object.freeze({darkMode:!0,fontSize:"11px",primaryColor:c["--d3fend-mermaid-node-fill"],primaryBorderColor:c["--d3fend-mermaid-node-border"],primaryTextColor:c["--d3fend-mermaid-node-text"],lineColor:c["--d3fend-mermaid-edge"],textColor:c["--d3fend-mermaid-node-text"],mainBkg:c["--d3fend-mermaid-node-fill"],nodeBorder:c["--d3fend-mermaid-node-border"],clusterBkg:c["--d3fend-mermaid-cluster-fill"],clusterBorder:c["--d3fend-mermaid-cluster-border"],titleColor:c["--d3fend-mermaid-cluster-text"],edgeLabelBackground:c["--d3fend-mermaid-edge-label-background"]}),d=':where(.mermaid-themed, .neighbors-container, [id="mermaid"], .mermaid-process)',E=`
${d} svg {
  color: var(--d3fend-mermaid-node-text);
  background: transparent;
}

${d} svg :where(.node rect, .node polygon, .node circle, .node ellipse) {
  fill: var(--d3fend-mermaid-node-fill) !important;
  stroke: var(--d3fend-mermaid-node-border) !important;
}

${d} svg :where(
  .label,
  .nodeLabel,
  .label span,
  .label p,
  .nodeLabel p,
  .nodeLabel span,
  foreignObject,
  foreignObject div
) {
  color: var(--d3fend-mermaid-node-text) !important;
}

${d} svg :where(.node text, .label text, .cluster-label text, text) {
  fill: var(--d3fend-mermaid-node-text) !important;
}

${d} svg :where(
  .DefensiveTechniqueNode,
  .OffensiveTechniqueNode,
  .ArtifactNode,
  .AgentNode,
  .EventNode,
  .artifact-node,
  .agent-node,
  .attack-node,
  .condition-node,
  .countermeasure-node,
  .event-node,
  .note-node,
  .thing-node,
  .RootArtifactNode,
  .WeaknessNode,
  .vulnerability-node,
  .inbound_node
) :where(.label, .nodeLabel, .label span, .label p, .nodeLabel p, .nodeLabel span, foreignObject, foreignObject div) {
  color: var(--d3fend-mermaid-class-node-text) !important;
}

${d} svg :where(
  .DefensiveTechniqueNode,
  .OffensiveTechniqueNode,
  .ArtifactNode,
  .AgentNode,
  .EventNode,
  .artifact-node,
  .agent-node,
  .attack-node,
  .condition-node,
  .countermeasure-node,
  .event-node,
  .note-node,
  .thing-node,
  .RootArtifactNode,
  .WeaknessNode,
  .vulnerability-node,
  .inbound_node
) :where(text, .label text, .nodeLabel text) {
  fill: var(--d3fend-mermaid-class-node-text) !important;
}

${d} svg :where(.edgePath path, .flowchart-link, .path, .relation) {
  stroke: var(--d3fend-mermaid-edge) !important;
}

${d} svg :where(marker path, .arrowheadPath) {
  fill: var(--d3fend-mermaid-edge) !important;
  stroke: var(--d3fend-mermaid-edge) !important;
}

${d} svg :where(.edgeLabel, .edgeLabel span, .edgeLabel p, .edgeLabel foreignObject) {
  color: var(--d3fend-mermaid-edge-label-text) !important;
}

${d} svg .edgeLabel .labelBkg,
${d} svg .edgeLabel span,
${d} svg .edgeLabel p {
  background-color: var(--d3fend-mermaid-edge-label-background) !important;
  color: var(--d3fend-mermaid-edge-label-text) !important;
}

${d} svg :where(.edgeLabel text) {
  fill: var(--d3fend-mermaid-edge-label-text) !important;
}

${d} svg :where(.edgeLabel rect, .edgeLabel .labelBkg) {
  fill: var(--d3fend-mermaid-edge-label-background) !important;
  background-color: var(--d3fend-mermaid-edge-label-background) !important;
  opacity: 1 !important;
}

${d} svg :where(.cluster rect) {
  fill: var(--d3fend-mermaid-cluster-fill) !important;
  stroke: var(--d3fend-mermaid-cluster-border) !important;
}

${d} svg :where(.cluster-label, .cluster-label span, .cluster-label p) {
  color: var(--d3fend-mermaid-cluster-text) !important;
}

${d} svg :where(.cluster-label text) {
  fill: var(--d3fend-mermaid-cluster-text) !important;
}

${d} svg :where(.DefensiveTechniqueNode > rect) {
  fill: var(--d3fend-mermaid-defensive-fill) !important;
  stroke: var(--d3fend-mermaid-defensive-border) !important;
  stroke-width: 1px !important;
}

${d} svg :where(.OffensiveTechniqueNode > rect) {
  fill: var(--d3fend-mermaid-offensive-fill) !important;
  stroke: var(--d3fend-mermaid-offensive-border) !important;
  stroke-width: 1px !important;
}

${d} svg :where(.ArtifactNode > rect, .artifact-node > rect) {
  fill: var(--d3fend-mermaid-artifact-fill) !important;
  stroke: var(--d3fend-mermaid-artifact-border) !important;
}

${d} svg :where(.AgentNode > rect, .agent-node > rect) {
  fill: var(--d3fend-cad-node-agent) !important;
}

${d} svg :where(.attack-node > rect) {
  fill: var(--d3fend-cad-node-attack) !important;
}

${d} svg :where(.condition-node > rect) {
  fill: var(--d3fend-cad-node-condition) !important;
}

${d} svg :where(.countermeasure-node > rect) {
  fill: var(--d3fend-cad-node-countermeasure) !important;
}

${d} svg :where(.EventNode > rect, .event-node > rect) {
  fill: var(--d3fend-cad-node-event) !important;
}

${d} svg :where(.note-node > rect) {
  fill: var(--d3fend-cad-node-note) !important;
}

${d} svg :where(.thing-node > rect) {
  fill: var(--d3fend-cad-node-thing) !important;
}

${d} svg :where(.RootArtifactNode > rect) {
  fill: var(--d3fend-mermaid-root-fill) !important;
  stroke: var(--d3fend-mermaid-root-border) !important;
}

${d} svg :where(.WeaknessNode > rect, .vulnerability-node > rect) {
  fill: var(--d3fend-mermaid-vulnerability-fill) !important;
  stroke: var(--d3fend-mermaid-vulnerability-border) !important;
  stroke-width: 1px !important;
}

${d} svg :where(.inbound_node > rect) {
  fill: var(--d3fend-mermaid-inbound-fill) !important;
  stroke: var(--d3fend-mermaid-defensive-border) !important;
}
`;function x(r){return r===l?l:y.includes(r)?r:u}function B(r,n=!1){const t=x(r);return t!==l?t:n?"dark":"light"}function g(r=":root",n=N,t={}){const i=Object.entries({...n,...t}).map(([b,_])=>`  ${b}: ${_};`).join(`
`);return`${r} {
${i}
}`}function D(){const r=g(":root",f.light,{"color-scheme":"light"}),n=y.map(b=>g(`:root[${m}="${b}"]`,f[b],{"color-scheme":h[b]??"light"})),t=g(`:root[${m}="${l}"]`,f.light,{"color-scheme":"light"}),i=g(`:root[${m}="${l}"]`,f.dark,{"color-scheme":"dark"});return[r,...n,`@media (prefers-color-scheme: light) {
${t}
}`,`@media (prefers-color-scheme: dark) {
${i}
}`].join(`

`)}function O(r){const n=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches;return B(r,n)}function F(r){const n=O(r);return h[n]??h.light}function p(){if(typeof localStorage>"u")return u;try{return localStorage.getItem(w)??u}catch{return u}}function M(r){if(!(typeof localStorage>"u"))try{localStorage.setItem(w,r)}catch{}}function I(r){const n=O(r);return k[n]??k.light}function J(r){if(typeof document>"u")return;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",I(r))}function j(r,n={}){const t=x(r),i=O(t);return typeof document<"u"&&(document.documentElement.setAttribute(m,t),document.documentElement.style.colorScheme=F(t),J(t)),n.persist&&M(t),typeof window<"u"&&window.dispatchEvent(new CustomEvent(L,{detail:{theme_name:t,active_theme_name:i}})),t}function V(){var t;const r=p(),n=j(r);if(typeof window<"u"&&typeof window.matchMedia=="function"){const i=window.matchMedia("(prefers-color-scheme: dark)"),b=()=>{const _=typeof document>"u"?p():document.documentElement.getAttribute(m)??p();x(_)===l&&j(l)};(t=i.addEventListener)==null||t.call(i,"change",b)}return n}const X=`<script data-d3fend-theme-bootstrap>
(function () {
  var storageKey = "${w}";
  var themeAttribute = "${m}";
  var defaultTheme = "${u}";
  var systemTheme = "${l}";
  var themes = ${JSON.stringify(C)};
  var themeColors = ${JSON.stringify(k)};
  var themeColorSchemes = ${JSON.stringify(h)};

  function normalizeTheme(themeName) {
    return themes.indexOf(themeName) === -1 ? defaultTheme : themeName;
  }

  function activeTheme(themeName) {
    if (themeName !== systemTheme) return themeName;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setThemeColor(themeName) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute("content", themeColors[themeName] || themeColors[defaultTheme]);
  }

  function colorScheme(themeName) {
    var resolvedThemeName = activeTheme(themeName);
    return themeColorSchemes[resolvedThemeName] || themeColorSchemes[defaultTheme] || defaultTheme;
  }

  try {
    var storedTheme = window.localStorage && window.localStorage.getItem(storageKey);
    var themeName = normalizeTheme(storedTheme);
    var resolvedThemeName = activeTheme(themeName);
    document.documentElement.setAttribute(themeAttribute, themeName);
    document.documentElement.style.colorScheme = colorScheme(themeName);
    setThemeColor(resolvedThemeName);
  } catch (error) {
    document.documentElement.setAttribute(themeAttribute, defaultTheme);
    document.documentElement.style.colorScheme = defaultTheme;
    setThemeColor(defaultTheme);
  }
}());
<\/script>`,R=D(),Y=`<style data-d3fend-color-palette>${R}

${E}</style>`;export{Y as a,u as b,a as c,X as d,L as e,j as f,o as g,m as h,V as i,C as j,P as k,G as l,U as m,x as n,Q as o,e as p,H as q,B as r,K as s,W as t};
