<template>
    <v-container fluid id="home" style="padding-left: 5vw; padding-top: 5vh">
        <v-row>
            <v-col cols="12">
                <h1 style="margin-bottom: 5vh;">마스터볼: 실전 포켓몬 계산기</h1>
                <div>마스터볼은 포켓몬 배틀 실전을 즐기시는 분들을 위한 실전 포켓몬 계산기입니다. <br/>
                쉽고 빠르게 포켓몬 샘플을 만들어 보세요.
                실전에서 필요한 복잡한 계산은 마스터볼이 알아서 해줍니다. <br/>
                <span style="color: grey;">계산 지원 포켓몬: 9세대 (팔데아 도감)</span>
                <br/><br/>
                <span style="color: red;">(※ 마스터볼은 인터넷 브라우저의 로컬 스토리지를 사용합니다. 인터넷 브라우저를 재설치하거나, 브라우저 캐시를 삭제하면 저장한 샘플이 삭제됩니다.)</span>
                <br/>
                <span style="color: red;">(※ 마찬가지의 이유로, 다른 브라우저로 접속 시 이전 브라우저에서 생성한 샘플이 나타나지 않습니다.)</span>
                </div>
                <h1 style="margin-top: 5vh;">최근 편집한 포켓몬</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
    #home {
        background-image: url("../assets/img/masterball.png");
        background-size: 25%;
        background-position-x: right;
        background-position-y: bottom;
        height: 100vh;
    }
</style>