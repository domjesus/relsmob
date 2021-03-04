<template>
  <b-navbar toggleable="lg" variant="secondary" type='dark' class="mb-2">
    <b-navbar-brand href="https://teletrabalho.net">
      
      <img
        src="https://teletrabalho.net/wp-content/uploads/2020/02/cropped-teletrabalho.jpg"
        alt="Ir para Teletrabalho.net"
      />
    </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-navbar-brand href="https://teletrabalho.net/index.php/blog" target="_blank">Blog</b-navbar-brand>
        <b-navbar-brand href="https://teletrabalho.net/despacho" target="_blank">Despachos - RD</b-navbar-brand>
        <b-navbar-brand href="https://teletrabalho.net/index.php/acps-acoes-civis-publicas/" target="_blank">ACP's</b-navbar-brand>

              <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Teletrabalho</em>
          </template>
              <b-dropdown-group id="dropdown-group-1" header="Rural">
                <b-dropdown-item href="https://teletrabalho.net/scpr/anexos/anexo_iv_of46.php" target="_blank">Anexo IV - Of. 46</b-dropdown-item>
                <b-dropdown-item href="https://teletrabalho.net/index.php/teletrabalho?item=consulta_modulos_fiscais">Consulta Módulos Fiscais</b-dropdown-item>
                <b-dropdown-item href="https://teletrabalho.net/index.php/teletrabalho?item=CalculaSete">Diferença 7,5 Anos</b-dropdown-item>
              </b-dropdown-group>

    <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-group id="dropdown-group-2" header="Atividade Especial">
                <b-dropdown-item href="https://teletrabalho.net/index.php/teletrabalho?item=consulta_atividade_especial_new">Consulta Atividade Profissional</b-dropdown-item>
                <b-dropdown-item href="https://teletrabalho.net/scpr/atividade_especial2.0.php">Despacho Análise Administrativa</b-dropdown-item>
              </b-dropdown-group>

    <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-group id="dropdown-group-3" header="Normas">
                <b-dropdown-item href="https://teletrabalho.net/index.php/portarias">Portarias</b-dropdown-item>                
              </b-dropdown-group>

    <b-dropdown-divider></b-dropdown-divider> 
              <b-dropdown-item href="https://teletrabalho.net/index.php/teletrabalho?item=consulta_rpps_new">Consulta RPPS</b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style>
img {
  width: 65px;
  /* height: 65px; */
}

a:hover {
  text-decoration: none;
}
</style>