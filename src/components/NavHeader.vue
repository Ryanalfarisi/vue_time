<template>
    <div>
        <nav class="nav-theme">
            <div class="container">
                <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 text-right">
                    <router-link to="/">
                    <img src="/static/images/LOGO.png" alt="" class="img-fluid" />
                    </router-link>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
.nav-theme {
  background: linear-gradient(180deg, #fdb600 0%, #fd9800 100%);
  box-shadow: 0px 8px 20px rgba(254, 171, 1, 0.3);
}
.nav-theme .img-fluid {
  max-height: 96px;
}
</style>