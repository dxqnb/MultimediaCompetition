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
  import {documentOutline, ellipsisHorizontal, folderOutline} from 'ionicons/icons';
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
	const mainIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="191" height="29.748" viewBox="0 0 191 29.748">\n' +
      '  <defs>\n' +
      '    <linearGradient id="linear-gradient" x1="0.5" x2="0.933" y2="0.915" gradientUnits="objectBoundingBox">\n' +
      '      <stop offset="0" stop-color="#5a65ec"/>\n' +
      '      <stop offset="1" stop-color="#82b0ff"/>\n' +
      '    </linearGradient>\n' +
      '  </defs>\n' +
      '  <g id="组_1585" data-name="组 1585" transform="translate(-995.004 -13291)">\n' +
      '    <g id="组_1583" data-name="组 1583" transform="translate(995.004 13298.139)">\n' +
      '      <path id="路径_634" data-name="路径 634" d="M-2924.862,1064.318l1.49-8.1h1.555l-1.382,8.1Zm3.758-10.324-.5-.907h3.585l-2.2,15.507h-2.959Zm1.792,14.622,3.5-6.112h-2.116l.3-2.052h2.916l.475-3.434h-2.16l.26-1.9h2.16l.173-1.231-.691-.821h4.428l-.3,2.052h3.736l-.734,5.335h.864l-.3,2.052h-3.65l2.484,6.112h-3.866l-1.512-4.276-2.419,4.276Zm.821-8.768.389-3.628h1.555l-.3,3.628Zm7.711-2.83-.5,3.434h.95l.475-3.434Z" transform="translate(2924.862 -1053.066)" fill="#fff"/>\n' +
      '      <path id="路径_635" data-name="路径 635" d="M-2841.809,1068.3l1.339-2.116,1.015-7.278h-.864l.281-2.052h4.579l-1.231,8.769,2.829.648h10.259l-.281,2.052h-11.49l-2.181-.626-.389.6Zm5.81-14.751.67,2.57h-3.412l-.67-2.57Zm0,11.9,1.555-3.521h2.872l-1.49,3.521Zm1.62-8.92h4.039l.086-.583h-4.1l.259-1.857h4.1l.022-.173-.475-.756h4.082l-.13.929h4.1l-.259,1.857h-4.1l-.087.583h4.039l-.691,4.946h-4.039l-.6,4.384h-3.5l.6-4.384h-4.039Zm2.484,3.3h1.1l.216-1.663h-1.08Zm5.939-1.663h-1.123l-.216,1.663h1.1Zm-.734,7.235-.345-3.478h2.829l.367,3.478Z" transform="translate(2861.139 -1053.138)" fill="#fff"/>\n' +
      '      <path id="路径_636" data-name="路径 636" d="M-2738.005,1066.392l-.26,1.879h-17.429l.259-1.879Zm-16.674-7.192,2.592-3.391h-1.879l.238-1.728h6.8l.043-.259-.971-.756h4.967l-.151,1.015h6.415l-.238,1.728h-1.49l1.123,3.391h-3.931l-1.123-3.391h-.994l-.454,3.369h-3.909l.475-3.369h-.994l-2.592,3.391Zm16.479.259-.907,6.479h-15.14l.907-6.479Zm-4.47,4.665.086-.713h-7.279l-.086.713Zm-7-2.117h7.279l.13-.821h-7.279Z" transform="translate(2795.067 -1053.066)" fill="#fff"/>\n' +
      '      <path id="路径_637" data-name="路径 637" d="M-2669.022,1068.206l1.231-8.7h-1.145l.324-2.332h4.73l-1.058,7.559.972-.454-.345,2.44Zm4.557-14.73.54,2.894h-3.218l-.518-2.894Zm9.676,4.319-1.166,8.315h-7.8l1.166-8.315Zm-5.853-4.276-.454-.454h3.715l-.647,1.318h7.494l-1.793,12.721a1.624,1.624,0,0,1-.583,1.047,1.69,1.69,0,0,1-1.123.421h-5.615l1.922-1.965h2.246l1.447-10.237h-4.946l-.432.886h-3.175Zm.346,9.287-.216,1.49h1.793l.216-1.49Zm.453-3.2-.216,1.49h1.793l.216-1.49Z" transform="translate(2728.567 -1053.066)" fill="#fff"/>\n' +
      '    </g>\n' +
      '    <path id="路径_642" data-name="路径 642" d="M-2432.353,1252.2l-93.74,0a2.508,2.508,0,0,1-2.364-3.292l4.874-23.163a4.139,4.139,0,0,1,3.75-3.292h93.741a2.507,2.507,0,0,1,2.364,3.292l-4.874,23.163A4.139,4.139,0,0,1-2432.353,1252.2Z" transform="translate(3609.656 12068.547)" fill="url(#linear-gradient)"/>\n' +
      '    <g id="组_1584" data-name="组 1584" transform="translate(1093.878 13298.291)">\n' +
      '      <path id="路径_638" data-name="路径 638" d="M-2455.9,1064.57h-4.644l-2.808-3.2-4.514,3.2h-5.119l6.047-4.3h-5.464l.281-2.009h8.207l.713-5.14h4.039l-.713,5.14h4.968l-.281,2.009h-6.63l-.756.54h3.391Zm-4.125-14.3h6.22l-.475,3.283h-3.65l.194-1.3h-9.848l-.13.864h3.456l.713,2.138h-3.78l-.583-1.706h-3.542l.475-3.283h6.35l.065-.453-.691-.778h5.4Zm-5.14,7.516h-3.758l-.8-2.138h3.758Z" transform="translate(2472.985 -1049.041)" fill="#fff"/>\n' +
      '      <path id="路径_639" data-name="路径 639" d="M-2385.848,1050.488l-.54-.626h8.207l-1.944,13.952h-7.581Zm2.721,11.274.561-4.1h-1.015l-.562,4.1Zm-.151-6.155h1.015l.518-3.693h-1.015Zm7.711,4.924h-2.872l-.022-5.745h2.873Zm-1.62,4.06,1.922-1.987,1.339-9.46h-4.3l.281-2.052h4.3l.216-1.447-.518-.6h4.3l-.3,2.052h1.447l-.281,2.052h-1.447l-1.4,10.021a1.67,1.67,0,0,1-.583,1.026,1.661,1.661,0,0,1-1.1.4Z" transform="translate(2407.553 -1049.041)" fill="#fff"/>\n' +
      '      <path id="路径_640" data-name="路径 640" d="M-2284.058,1052.857h-6.372l-.086.6h5.961l-.8,5.745h-6.22l-2.527,2.289,3.261,2.031h5.7l-.345,2.419h-7.387l-3.65-2.268-2.506,2.268h-4.514l4.341-3.931-3.477-2.182h5.119l.453.3,1.015-.929h-5.27l.691-4.924-.713-.821h6.76l.086-.6h-6.76l.281-2.052h17.235Zm-11.145,4.708.086-.6h-1.836l-.086.6Zm-1.577-1.836h1.836l.086-.626h-1.836Zm7.538,1.836.086-.6h-1.857l-.086.6Zm-1.512-2.462-.086.626h1.857l.086-.626Z" transform="translate(2342.977 -1050.395)" fill="#fff"/>\n' +
      '      <path id="路径_641" data-name="路径 641" d="M-2215.929,1063.4h-2.051l1.209-4.1h2.052Zm1.988-6.76.086-.626h-3.089l.3-2.052h1.447l-.259-1.231h2.873l.26,1.231h.8l.6-1.231h2.873l-.6,1.231h1.447l-.3,2.052h-3.067l-.086.626H-2208l-.281,2.052h-2.656l-.626,4.471a1.652,1.652,0,0,1-.594,1.026,1.7,1.7,0,0,1-1.112.4h-2.83l1.21-1.231.669-4.665h-2.678l.281-2.052Zm.907-6.371.086-.6-.54-.627h3.909l-.173,1.231h2.657l-.3,2.052h-8.618l.3-2.052Zm2.4,9.028h2.052l.043,4.1h-2.052Zm4.579-9.028,7.753-1.231-.3,2.052-4.6.734-.3,2.138h4.924l-.3,2.052h-.821l-1.209,8.574h-3.089l1.21-8.574h-1.015l-1.21,8.574h-3.067Z" transform="translate(2277.331 -1049.041)" fill="#fff"/>\n' +
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
							<ion-icon style="display: block;margin: 0 auto 8px auto;width: 35px;height: 35px;" :icon="documentOutline"></ion-icon>
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
		background: url("@/img/gradeBackground.png");
		background-size: cover;
	}
</style>
<style>
	.search input {
		font-size: 12px !important;
	}
</style>