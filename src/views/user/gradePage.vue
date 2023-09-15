<script setup lang="ts">
	import {
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonButtons,
		IonBackButton,
		IonIcon,
		IonSearchbar,
		IonThumbnail,
		IonLabel,
		IonContent,
		IonList,
		IonCard,
		IonCardContent,
		IonBadge,
		IonButton,
		IonSegment,
		IonSegmentButton,
		IonAvatar,
		IonRange,
		IonText,
		IonRadio,
		IonRadioGroup,
		IonRow,
		IonCol,
		IonGrid,
	} from "@ionic/vue";
	import { ellipsisHorizontal } from 'ionicons/icons';
	import { reactive, ref } from "vue";
	import { useRouter } from 'vue-router';
	import { getMyGrades } from "@/api/user";
	const data = localStorage.getItem('user') as string | null;
	const userid = ref('');
	if (data) { // 检查数据是否存在
		const parsedData = JSON.parse(data); // 将字符串转换为对象

		if (parsedData && parsedData.username) { // 检查是否成功解析并存在 username 字段
			userid.value = parsedData.username; // 提取 username 并赋值给变量
		}
		// const username=userid.value;
		// console.log(userid.value);

	}
	interface item {
		id : number,
		username : string,
		classname : number,
		year : string,
		semester : number,
		grades : string
	}


	const items = reactive<item[]>([]);
	const years = ref(["2021-2022", "2022-2023", "2023-2024"]);
	const router = useRouter();
	const goGradeDetail = (year : string) => {
		router.push(`/user/gradeDetail/${year}`);

	};
	const mainIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="193" height="35" viewBox="0 0 193 35">\n' +
		'  <defs>\n' +
		'    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 237 77">\n' +
		'      <image width="237" height="77" xlink:href="data:image/png;base64,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"/>\n' +
		'    </pattern>\n' +
		'  </defs>\n' +
		'  <g id="组_1267" data-name="组 1267" transform="translate(-115 -104)">\n' +
		'    <g id="组_1265" data-name="组 1265" transform="translate(214 -13934)">\n' +
		'      <g id="组_1264" data-name="组 1264" transform="translate(18 3)">\n' +
		'        <rect id="图像_20" data-name="图像 20" width="109" height="35" transform="translate(-33 14035)" fill="url(#pattern)"/>\n' +
		'        <rect id="矩形_518" data-name="矩形 518" width="88" height="24" transform="translate(-24 14041)" fill="#78a5f1"/>\n' +
		'      </g>\n' +
		'      <text id="实时更新" transform="translate(3 14063)" fill="#fff" font-size="18" font-family="SourceHanSansCN-Bold, Source Han Sans CN" font-weight="700" letter-spacing="0.015em"><tspan x="0" y="0">实时更新</tspan></text>\n' +
		'    </g>\n' +
		'    <g id="组_1266" data-name="组 1266">\n' +
		'      <text id="快速查询" transform="translate(115 129)" fill="#fff" font-size="18" font-family="SourceHanSansCN-Bold, Source Han Sans CN" font-weight="700" letter-spacing="0.015em"><tspan x="0" y="0">快速查询</tspan></text>\n' +
		'    </g>\n' +
		'  </g>\n' +
		'</svg>\n')
</script>

<template>
	<IonPage>
		<IonHeader collapse="fade" style="" class="ion-no-border ion-padding">
			<IonToolbar style="--color: white;--background: none" class="">
				<ion-buttons slot="start">
					<ion-back-button style="color: #FFFFFF" text="" default-href="/tabs/user"></ion-back-button>
				</ion-buttons>
				<IonTitle>成绩查询</IonTitle>
			</IonToolbar>
		</IonHeader>
		<ion-content :fullscreen="true" class="ion-padding">
			<ion-icon style="display: block;margin: auto;width: 200px;height: 40px;" :icon="mainIcon"></ion-icon>
			<ion-searchbar class="search" :mode="'md'"
				style="--box-shadow: none;--border-radius: 10px;font-size: 12px !important;"
				placeholder="请尽量输入完整，如《java编程基础》"></ion-searchbar>
			<ion-grid>
				<ion-row>
					<ion-col size="4" v-for="(year, index) in years" :key="index" @click="goGradeDetail(year)">
						<div style="background-color: #F3F5FE;height: 114px;border-radius: 10px;padding-top: 14px">
							<ion-avatar style="display: block;margin: 0 auto 8px auto;width: 35px;height: 35px;"><img
									src="@/img/小U-02.png" alt=""></ion-avatar>
							<ion-text
								style="text-align: center;color:#585858;font-size: 12px;display: block;margin: 5px 0">{{year}}学年</ion-text>
							<ion-text
								style="text-align: center;color:#C0C0E0;font-size: 10px;display: block;margin: 5px 0">详情</ion-text>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</IonPage>
</template>

<style scoped>
	ion-header {
		background: none;
	}

	ion-content::part(background) {
		background: url("@/img/grade.png");
		background-size: cover;
	}
</style>
<style>
	.search input {
		font-size: 12px !important;
	}
</style>