<template>
    <div>
        <div class="header-1">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('img/plan_masson.jpg')"></div>
                <div class="content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ml-auto text-right">
                                <h1 class="title">Promos</h1>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { Card, Button, Badge, InfoSection, FormGroupInput } from '@/components';
    import axios from "axios";
    export default {
        name: "promos",
        title: 'AC Conseils | Promotions',
        description: 'Découvrez nos promotions!',
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },

    }
</script>

<style scoped>

</style>