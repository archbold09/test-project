<template>
    <div>

        <Sidebar/>

        <Header/>

        <v-main class="grey lighten-4">
            <!-- <router-view/> -->
            <v-container>
                <v-row justify="center" align="center">
                    <v-col align-self="center" cols="12">
                        <v-sheet min-height="70vh" rounded="lg" elevation="9">
                            <router-view/>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <Footer/>

    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar/Index'
import Header from '@/components/Header/Index'
import Footer from '@/components/Footer/Index'
export default {
  name: 'MainLayout',

  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>
