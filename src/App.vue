<template>
  <div id="container">
    <Header />

    <Sidebar />

    <router-view />
  </div>
</template>

<style lang="scss">
#container {
  position: relative;
  padding-left: 240px;
  padding-bottom: 50px;
}
</style>
