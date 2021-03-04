<template>
    <div>

        <Header/>

        <v-main class="grey lighten-3">
            <!-- <router-view/> -->
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <Sidebar/>
                    </v-col>
                    <router-view/>
                </v-row>
            </v-container>
        </v-main>

    </div>
</template>

<script>

import Header from '@/components/Header/Index'
import Sidebar from '@/components/Sidebar/Index'

export default {
  name: 'MainLayout',

  components: {
    Sidebar,
    Header
  }
}
</script>
