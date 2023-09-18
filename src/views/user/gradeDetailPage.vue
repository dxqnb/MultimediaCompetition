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
  IonPopover,
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
  loadingController,
} from "@ionic/vue";
import {ellipsisHorizontal, searchOutline} from 'ionicons/icons';
import {reactive, ref, onMounted} from "vue";
import {useRoute} from 'vue-router';
import {getMyGrades} from "@/api/user";
import {cjzj} from "@/api/user";
import axios from 'axios';

const route = useRoute();
const yeartime = route.params.year;
console.log(yeartime)

interface item {
  id: number,
  username: string,
  classname: number,
  year: string,
  semester: number,
  grades: string
}

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
const tableList = reactive<Array<any>>([]);
const year = ref('');
const semester = ref('');
const classname = ref('');
const grades = ref('');
onMounted(async () => {
  const response = await getMyGrades(userid.value, yeartime);
  year.value = response.data.data[0].year
  semester.value = response.data.data[0].semester
  classname.value = response.data.data[0].classname
  grades.value = response.data.data[0].grades
  response.data.data.forEach((item: { year: string, semester: string, classname: string, grades: number }) => {
    tableList.push(item);
  });
});
const dataList = reactive<Array<any>>([]);
// const cjzj = async () => {
// 	try {
// 		// 调用 getMyGrades 方法获取数据
// 		const response = await getMyGrades(userid.value, yeartime);
//
// 		dataList.push(...response.data.data) // Assuming response.data.data is an array
//
//
// 		// 将 dataList 转换为 JSON 字符串
// 		const jsonString = JSON.stringify([...dataList]);
//
// 		console.log(jsonString);
//
// 		// 调用 ErnieBot 的接口进行分析
// 		const ernieResponse = await axios.post('https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=24.31c7b20e312a87844c316e73d5cbc861.2592000.1697375987.282335-38049038', jsonString);
//
// 		// 处理 ErnieBot 返回的分析结果
// 		console.log(ernieResponse.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
const user = localStorage.getItem('user') || ''
const username = JSON.parse(user).username
const studentname = JSON.parse(user).studentname
const avatar = JSON.parse(user).avatar
const smart = ref('')
const popover = ref();
const popoverFlag = ref(false);

async function smartAnalysis() {
  const loading = await loadingController.create({
    message: '小U正在努力分析...',
    // duration: 3000,
  });
  loading.present();
  cjzj(username, year.value).then((res) => {
    loading.dismiss()
    popoverFlag.value = true
    smart.value = res.data.result
  })
}

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
const viceIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="61.909" height="59.548" viewBox="0 0 61.909 59.548">\n' +
    '  <g id="组_1465" data-name="组 1465" transform="translate(-1358.389 -13239.587)" opacity="0.21">\n' +
    '    <path id="路径_537" data-name="路径 537" d="M75.027,75.295l6.1-3.543-2.382-.021L72.64,75.279Z" transform="translate(1321.638 13169.905)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_538" data-name="路径 538" d="M45.8,121.872l6.1-3.549,1.013-2.244-6.105,3.549Z" transform="translate(1364.089 13149.082)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_539" data-name="路径 539" d="M67.332,73.966l6.105-3.549L70.78,68.81l-6.1,3.549Z" transform="translate(1333.55 13171.277)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_540" data-name="路径 540" d="M42.219,115.311l6.1-3.549-.249-3.183-6.1,3.543Z" transform="translate(1370.714 13152.603)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_541" data-name="路径 541" d="M62.577,75.41l6.1-3.543L66.3,71.84,60.19,75.389Z" transform="translate(1340.692 13169.855)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_542" data-name="路径 542" d="M40.53,110.132l6.1-3.543,1.013-2.249-6.105,3.549Z" transform="translate(1372.154 13154.594)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_543" data-name="路径 543" d="M58.133,78.255l6.105-3.543L61.92,71.89l-6.1,3.543Z" transform="translate(1347.449 13169.832)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_544" data-name="路径 544" d="M41.978,104.888l6.105-3.549L46.635,97.95l-6.105,3.543Z" transform="translate(1371.714 13157.594)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_545" data-name="路径 545" d="M49.533,87.168l6.105-3.543L54.19,80.23l-6.1,3.549Z" transform="translate(1360.149 13165.914)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_546" data-name="路径 546" d="M53.477,82.361l6.1-3.549-2.652-1.6L50.82,80.753Z" transform="translate(1354.762 13167.335)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_547" data-name="路径 547" d="M43.5,98.676l6.105-3.543-.244-3.183L43.26,95.493Z" transform="translate(1368.74 13160.413)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_548" data-name="路径 548" d="M46.038,93l6.105-3.543L49.825,86.63,43.72,90.173Z" transform="translate(1365.962 13162.91)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_549" data-name="路径 549" d="M62.988,77.128,60.6,77.107,57.949,75.5l-1.565,1.565L54,77.049l-.393,2.79-1.565,1.57.87,3.384-.393,2.8,1.941,3.2.87,3.384,2.562,2.281,1.936,3.2,2.594.838,2.557,2.281,2.037-.8,2.594.838,1.008-2.244,2.037-.8L72.4,96.59l1.008-2.244-1.448-3.395-.244-3.183L69.4,84.947l-1.443-3.389L65.3,79.95Z" transform="translate(1340.281 13168.137)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <ellipse id="椭圆_197" data-name="椭圆 197" cx="2.737" cy="1.533" rx="2.737" ry="1.533" transform="translate(1401.619 13261.171) rotate(-114.14)" fill="#5f98ed" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_550" data-name="路径 550" d="M160.648,84.054l1.952-1.135-3.008-5.209-1.952,1.135Z" transform="translate(1206.309 13177.967)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_551" data-name="路径 551" d="M161.49,77.555l1.952-1.135a1.846,1.846,0,0,0,.827-1.31l-1.952,1.13a1.846,1.846,0,0,1-.827,1.315" transform="translate(1202.597 13179.188)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_552" data-name="路径 552" d="M149.02,88.676a.613.613,0,0,1,.138,0h.711l.122.037.1.032.133.053.138.058.111.058a1.542,1.542,0,0,1,.186.1,4.2,4.2,0,0,1,.53.361l.233.186c.085.08.175.159.255.244l.17.17.164.186.127.149.122.149.2.276c.042.064.09.127.127.2a.532.532,0,0,1,.048.069.563.563,0,0,1,.064.106c.037.048.064.1.1.148h0s.09.159.133.239.085.17.133.26.08.175.117.26l.069.164.048.111v.048c.032.08.058.159.085.239l.1.313v.1a1.431,1.431,0,0,1,.037.143.174.174,0,0,0,.027.111,1.321,1.321,0,0,1,.053.286v.133a.069.069,0,0,1,0,.032V94.1a1.354,1.354,0,0,1,0,.149,2.114,2.114,0,0,1-.886,1.947l1.947-1.13a2.172,2.172,0,0,0,.891-1.952h0v-.286a.869.869,0,0,0-.026-.265c-.027-.085,0,0,0-.032v-.058a.371.371,0,0,0-.027-.154,1.189,1.189,0,0,0-.032-.191.174.174,0,0,0-.027-.111,1.591,1.591,0,0,0-.042-.17v-.069l-.1-.313c-.032-.1-.069-.191-.106-.286l-.042-.111c0-.053-.048-.106-.069-.164h0a1.964,1.964,0,0,0-.085-.186.067.067,0,0,0-.027-.053l-.127-.26-.143-.255-.159-.26-.175-.26c-.058-.08-.111-.164-.17-.239a.111.111,0,0,1-.032-.042l-.228-.271-.164-.186-.17-.17a6.3,6.3,0,0,0-.493-.435l-.127-.1a1.157,1.157,0,0,0-.133-.09,2.349,2.349,0,0,0-.26-.164l-.212-.148-.159-.069h-.032l-.164-.064-.143-.042h-.037l-.26-.058h-.424a.814.814,0,0,0-.159,0Z" transform="translate(1217.937 13173.346)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_553" data-name="路径 553" d="M161.62,64.6h0l.143-.069h0l.122-.042h.355a.854.854,0,0,1,.2,0h.265l.18.032h.143l.3.111h0l.164.074.249.133.276.17.191.143a2.079,2.079,0,0,1,.17.133,4.608,4.608,0,0,1,.377.345,4.184,4.184,0,0,1,.334.35l.074.085.1.122a1.114,1.114,0,0,1,.074.09l.1.133.1.143c.064.085.122.175.18.265s.106.17.154.255h0c.048.085.1.164.138.255h0c.042.074.08.149.117.223v.069c.037.08.074.154.1.228s.08.18.117.271.069.191.1.286l.1.313c.032.117.058.228.085.345a2.584,2.584,0,0,1,.053.313l1.952-1.13a1.663,1.663,0,0,0-.053-.318h0a1.171,1.171,0,0,0-.058-.255c-.021-.085,0-.053,0-.074a1.072,1.072,0,0,0-.037-.138.631.631,0,0,0-.053-.17c-.016-.053,0-.058,0-.08l-.042-.122a.654.654,0,0,1-.037-.09,2.914,2.914,0,0,0-.111-.271.416.416,0,0,0-.069-.159.917.917,0,0,0-.053-.1v-.037a1.747,1.747,0,0,0-.111-.223,2.893,2.893,0,0,0-.143-.255l-.154-.26-.18-.265-.117-.159-.085-.111c-.08-.106-.159-.207-.244-.3h0l-.053-.064c-.08-.09-.159-.175-.244-.255l-.032-.032a4.88,4.88,0,0,0-1.029-.817l-.212-.117-.212-.1a1.061,1.061,0,0,0-.164-.064H165.1a.732.732,0,0,0-.143-.042h-.1a.9.9,0,0,0-.164-.032h-.615a.991.991,0,0,0-.17.042h-.08l-.08.032-.154.074h0Z" transform="translate(1198.165 13184.715)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_554" data-name="路径 554" d="M153.831,78.681l1.952-1.13-8.641-4.991-1.952,1.13Z" transform="translate(1219.73 13180.385)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_555" data-name="路径 555" d="M134.093,80.278l.069-.037.064-.032h0a.329.329,0,0,1,.1-.037.171.171,0,0,1,.048,0h0a1.063,1.063,0,0,1,.138-.032h.265a.645.645,0,0,1,.143,0h.228a1.917,1.917,0,0,1,.271.058h0l.111.037h.048l.159.058h0a.807.807,0,0,1,.1.048c.106.048.212.1.324.164a3.679,3.679,0,0,1,.461.308l.148.117a.111.111,0,0,1,.042.032c.122.1.249.212.366.329l.026.027c.106.106.207.217.308.334h0l.223.271c.069.09.138.18.2.276s.122.17.18.265.106.17.154.255l.117.2a.278.278,0,0,0,.032.053l.037.085c.032.058.064.117.09.175s.085.175.122.265l.111.276h0a.991.991,0,0,1,.053.133.759.759,0,0,1,.048.143c.027.069.048.143.069.218l.032.09v.053l.032.127a.877.877,0,0,0,.037.17c.011.053.032.143.042.212a.687.687,0,0,1,0,.149v.1a2.312,2.312,0,0,1,0,.271,2.49,2.49,0,0,1,0,.281h0a2.122,2.122,0,0,1-.891,1.952l1.952-1.135a2.166,2.166,0,0,0,.891-1.952h0a2.607,2.607,0,0,0,0-.286,1.167,1.167,0,0,0-.027-.3l-.032-.212a.956.956,0,0,0-.042-.207c-.016-.069,0-.106-.037-.159a1.5,1.5,0,0,0-.048-.2c-.027-.1-.058-.2-.1-.308s-.064-.191-.1-.286l-.111-.276-.122-.265h0l-.032-.058c-.032-.069-.064-.133-.1-.2s-.09-.175-.143-.26L140,81.313h0l-.032-.058-.143-.207c-.064-.1-.133-.186-.2-.276h0l-.127-.159-.1-.111h0l-.032-.037c-.042-.053-.09-.1-.133-.149l-.164-.17-.244-.228a4.561,4.561,0,0,0-.774-.562l-.218-.117-.212-.1h-.048l-.106-.037-.138-.048h-.154a1.294,1.294,0,0,0-.138-.032h-.058a.53.53,0,0,0-.133,0h-.456L136.32,79h0a.563.563,0,0,0-.133.048h0a.589.589,0,0,0-.154.074Z" transform="translate(1240.354 13177.362)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_556" data-name="路径 556" d="M155.155,74.093c-1.512-.875-2.769-.329-3.013,1.2L143.5,70.3a6.811,6.811,0,0,0-2.976-4.541c-1.687-.971-3.05-.2-3.055,1.74a6.7,6.7,0,0,0,3.034,5.257,3.151,3.151,0,0,0,.96.361l3.183,5.554a2.408,2.408,0,0,0-.53,1.713,6.673,6.673,0,0,0,3.034,5.251c1.681.971,3.05.2,3.055-1.735a6.7,6.7,0,0,0-3.034-5.262,2.53,2.53,0,0,0-1.639-.393l-3.008-5.209a1.766,1.766,0,0,0,.965-1.384l8.689,5.018a6.779,6.779,0,0,0,2.954,4.4c1.681.971,3.05.191,3.055-1.74A6.689,6.689,0,0,0,155.155,74.093Z" transform="translate(1221.419 13183.774)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_557" data-name="路径 557" d="M63.406,219.231l1.427-.827-2.2-3.8-1.427.828Z" transform="translate(1340.225 13073.688)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_558" data-name="路径 558" d="M64,214.482l1.422-.827a1.342,1.342,0,0,0,.615-.955l-1.427.827a1.337,1.337,0,0,1-.6.955" transform="translate(1337.541 13074.578)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_559" data-name="路径 559" d="M54.755,222.691h.615l.09.026h.074l.1.037.1.042.085.042.133.069a3.586,3.586,0,0,1,.387.265l.164.138a1.971,1.971,0,0,1,.191.175l.122.122c.037.048.08.09.122.138l.09.106.09.111.149.2.1.143.032.048.048.08.069.111h0a1.059,1.059,0,0,1,.1.17c.037.064.069.127.1.191l.085.191.048.117a.086.086,0,0,0,.037.085.074.074,0,0,0,0,.032l.064.18a.9.9,0,0,0,.069.223v.074a.71.71,0,0,1,.027.1.44.44,0,0,0,0,.08.42.42,0,0,0,.037.212.658.658,0,0,1,0,.1.048.048,0,0,1,0,.027,1.211,1.211,0,0,1,0,.138.59.59,0,0,1,0,.1v.064a.784.784,0,0,1,0,.111,1.56,1.56,0,0,1-.647,1.422l1.517-.743a1.554,1.554,0,0,0,.652-1.427h0v-.583a.267.267,0,0,0-.027-.138v-.08l-.032-.122v-.053l-.064-.228-.08-.207-.032-.085-.048-.117h0a.3.3,0,0,0-.064-.133v-.037l-.1-.191a2.128,2.128,0,0,0-.106-.186l-.111-.191-.127-.191-.127-.175h0l-.17-.2a1.509,1.509,0,0,0-.122-.138l-.117-.122a3.414,3.414,0,0,0-.366-.318l-.09-.069-.1-.069-.191-.122-.191-.1-.117-.048h0l-.122-.048-.1-.032h0l-.2-.042h-.631Z" transform="translate(1348.881 13070.228)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_560" data-name="路径 560" d="M64,205.014h0l.1-.053h0l.09-.032h.053a.153.153,0,0,1,.053,0h.042a.494.494,0,0,1,.127,0h.313l.133.027h.1l.223.08h0l.122.058.18.1.2.122.143.106.122.1c.1.08.186.164.276.255s.164.164.244.255l.053.064.074.09.048.064.074.1a1.292,1.292,0,0,1,.074.106l.133.191c.037.064.08.127.111.191h0l.1.186h0c.032.053.058.111.085.164h0a.074.074,0,0,1,0,.032l.08.164.08.2a.843.843,0,0,0,.074.212c.021.069.048.149.069.223s.048.17.064.255.032.154.042.228l1.5-.817a1.8,1.8,0,0,0-.042-.233h0a.782.782,0,0,0-.042-.186v-.058l-.032-.1a.153.153,0,0,0-.037-.122c-.037-.037,0-.042,0-.058l-.032-.09v-.064a.493.493,0,0,0-.085-.2.783.783,0,0,0-.053-.117.5.5,0,0,0-.032-.08h0l-.175-.2a2.117,2.117,0,0,0-.106-.186c-.037-.069-.074-.127-.117-.191l-.127-.191-.085-.122-.064-.08c-.058-.074-.117-.149-.18-.217h0l-.042-.048a1.915,1.915,0,0,0-.175-.186v-.027a3.711,3.711,0,0,0-.743-.573l-.159-.085-.154-.069a.577.577,0,0,0-.122-.048h0l-.1-.032h-.069l-.122-.027h-.451l-.122.032H65.6l-.117.053h0Z" transform="translate(1334.396 13078.628)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_561" data-name="路径 561" d="M58.422,215.307l1.427-.827-6.317-3.649-1.422.833Z" transform="translate(1350.036 13075.458)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_562" data-name="路径 562" d="M43.759,216.6l.053-.026h.721l.2.042h0l.08.027h.037l.111.042h0l.069.032.239.122a3.389,3.389,0,0,1,.4.133l.111.085H45.8c.09.074.186.159.271.244h0c.08.08.154.159.228.244h0l.164.2h0s.1.133.143.2l.133.191.117.191.08.149a.132.132,0,0,1,0,.037.355.355,0,0,1,.032.064l.064.127c.032.064.064.127.09.191l.08.2h0l.037.1a.134.134,0,0,0,.032.106c.032.032.037.106.053.159v.069a.09.09,0,0,1,0,.037.641.641,0,0,1,0,.1.825.825,0,0,1,0,.122l.032.154v.652h0a1.56,1.56,0,0,1-.652,1.427l1.613-.8a1.591,1.591,0,0,0,.652-1.427h0V219.2l-.032-.154a.174.174,0,0,0-.027-.111,1.421,1.421,0,0,0-.037-.143.75.75,0,0,0-.069-.228c-.027-.074-.048-.138-.074-.207s-.053-.133-.085-.2l-.085-.2h0l-.027-.042c0-.048-.042-.1-.069-.143s-.069-.127-.106-.191l-.111-.186h0v-.042l-.106-.149c-.048-.069-.1-.138-.149-.2h0l-.09-.117-.074-.085h0l-.1-.111a1.333,1.333,0,0,0-.122-.122c-.053-.058-.111-.111-.175-.17a3.717,3.717,0,0,0-.568-.408l-.159-.085a.979.979,0,0,0-.154-.069h-.111l-.1-.032a.17.17,0,0,0-.048,0h-.764a.529.529,0,0,0-.122.032h0l-.1.032a.43.43,0,0,0-.111.053Z" transform="translate(1365.341 13073.121)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_563" data-name="路径 563" d="M59.311,211.953c-1.109-.637-2.026-.239-2.2.881L50.8,209.184a4.938,4.938,0,0,0-2.175-3.315c-1.231-.711-2.228-.143-2.233,1.268a4.912,4.912,0,0,0,2.217,3.84,2.3,2.3,0,0,0,.711.276l2.344,4.058a1.756,1.756,0,0,0-.414,1.236,4.912,4.912,0,0,0,2.217,3.84c1.231.711,2.228.138,2.233-1.273a4.9,4.9,0,0,0-2.217-3.84,1.889,1.889,0,0,0-1.193-.286l-2.18-3.8a1.289,1.289,0,0,0,.705-1.008l6.365,3.66a4.965,4.965,0,0,0,2.159,3.23c1.225.706,2.228.138,2.233-1.273A4.912,4.912,0,0,0,59.311,211.953Z" transform="translate(1351.348 13077.932)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const AIIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="251.472" height="217.188" viewBox="0 0 251.472 217.188">\n' +
    '  <g id="组_1464" data-name="组 1464" transform="translate(-1409.03 -13347.5)" opacity="0.09">\n' +
    '    <path id="路径_355" data-name="路径 355" d="M247.882,230.628,86.934,309.139l-31.4-18.057L218.833,211Z" transform="translate(1365.777 13253.981)" fill="#6660fd"/>\n' +
    '    <path id="路径_356" data-name="路径 356" d="M274.822,84.41l.314,112.349-30.282,17.484-.314-112.357Z" transform="translate(1325.16 13281.187)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_357" data-name="路径 357" d="M236.568,214.214,206.3,196.619,205.98,84.27l30.274,17.587Z" transform="translate(1333.447 13281.214)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_358" data-name="路径 358" d="M236.254,97.071,205.98,79.484,236.262,62l30.274,17.594Z" transform="translate(1333.447 13286)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_359" data-name="路径 359" d="M181.25,271.87l-30.274-17.594L146.03,238.55,176.3,256.144Z" transform="translate(1346.329 13248.061)" fill="#7d8afd" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_360" data-name="路径 360" d="M140.884,242.211,110.61,224.617l21.473-12.4,30.274,17.594Z" transform="translate(1353.941 13253.717)" fill="#fff" stroke="#ad7504" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_361" data-name="路径 361" d="M165.247,220.467l-30.274-17.594L124.06,168.72l30.274,17.586Z" transform="translate(1351.05 13263.065)" fill="#7d8afd" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_362" data-name="路径 362" d="M165,141.64l37.057,91.136-31.648,18.277-4.946-15.7-34.309,19.808-4.711,21.292L95.6,294.234l36.429-133.563Zm-27.345,85.4,21.473-12.4-10.913-34.16-10.56,46.557" transform="translate(1357.166 13268.886)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_363" data-name="路径 363" d="M87.314,294.627,57.04,277.033,93.469,143.47l30.274,17.594Z" transform="translate(1365.452 13268.491)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_364" data-name="路径 364" d="M133.714,155.855,103.44,138.261,136.4,119.23l30.274,17.594Z" transform="translate(1355.481 13273.7)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_365" data-name="路径 365" d="M308.387,95.82h.063l-.22.118Z" transform="translate(1311.474 13278.733)" fill="none"/>\n' +
    '    <path id="路径_366" data-name="路径 366" d="M309.7,95.35h.047l-.267.055Z" transform="translate(1311.206 13278.836)" fill="none"/>\n' +
    '    <path id="路径_367" data-name="路径 367" d="M310.3,95.27h0Z" transform="translate(1311.057 13278.85)" fill="none"/>\n' +
    '    <path id="路径_368" data-name="路径 368" d="M310.87,95.25Z" transform="translate(1310.907 13278.854)" fill="none"/>\n' +
    '    <path id="路径_369" data-name="路径 369" d="M311.329,95.26h-.039Z" transform="translate(1310.817 13278.854)" fill="none"/>\n' +
    '    <path id="路径_370" data-name="路径 370" d="M311.771,95.31H311.7Z" transform="translate(1310.728 13278.843)" fill="none"/>\n' +
    '    <path id="路径_371" data-name="路径 371" d="M312.629,95.466l.165.047-.243-.063Z" transform="translate(1310.546 13278.81)" fill="none"/>\n' +
    '    <path id="路径_372" data-name="路径 372" d="M314.193,96.007h0l-.353-.157Z" transform="translate(1310.268 13278.725)" fill="none"/>\n' +
    '    <path id="路径_373" data-name="路径 373" d="M318.164,90.24h0l-.133.055Z" transform="translate(1309.368 13279.932)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_374" data-name="路径 374" d="M318.9,90.05Z" transform="translate(1309.181 13279.971)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_375" data-name="路径 375" d="M319.467,90Z" transform="translate(1309.069 13279.984)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_376" data-name="路径 376" d="M320.93,90Z" transform="translate(1308.745 13279.984)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_377" data-name="路径 377" d="M321.093,90h0Z" transform="translate(1308.747 13279.984)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_378" data-name="路径 378" d="M320.247,90.616l-7.168,4.169h0l-.322-.141-.322-.118-.322-.1h-.157l-.165-.047h-.079l-.251-.055h-1.617a1.573,1.573,0,0,0-.275.047h-.047l-.22.055-.212.063h-.118a.533.533,0,0,0-.22.094l-.181.079h-.063l7.019-4.083.157-.086.141-.071.2-.086.133-.055h0a.672.672,0,0,1,.134-.047l.188-.055.22-.047h.039l.2-.039h1.688l.251.055h.078l.322.086.322.1.314.118h0l.322.141Z" transform="translate(1311.414 13279.964)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_379" data-name="路径 379" d="M323.46,90.76Z" transform="translate(1308.201 13279.821)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_380" data-name="路径 380" d="M318.725,91.74h.078a1.577,1.577,0,0,0-.243.094A1.054,1.054,0,0,1,318.725,91.74Z" transform="translate(1309.254 13279.609)" fill="none"/>\n' +
    '    <path id="路径_381" data-name="路径 381" d="M320.587,91.34h.2l-.361.039Z" transform="translate(1308.853 13279.694)" fill="none"/>\n' +
    '    <path id="路径_382" data-name="路径 382" d="M322.718,91.4h0Z" transform="translate(1308.386 13279.683)" fill="none"/>\n' +
    '    <path id="路径_383" data-name="路径 383" d="M323.368,91.5l.243.055-.251-.055Z" transform="translate(1308.223 13279.661)" fill="none"/>\n' +
    '    <path id="路径_384" data-name="路径 384" d="M325.141,91.987l.463.173c-.2-.079-.408-.157-.6-.22Z" transform="translate(1307.87 13279.567)" fill="none"/>\n' +
    '    <path id="路径_385" data-name="路径 385" d="M327.465,93.021h0l-.345-.181Z" transform="translate(1307.415 13279.374)" fill="none"/>\n' +
    '    <path id="路径_386" data-name="路径 386" d="M330.449,86h0Z" transform="translate(1306.755 13280.844)" fill="none"/>\n' +
    '    <path id="路径_387" data-name="路径 387" d="M327.844,86.43h0l-.2.079Z" transform="translate(1307.303 13280.75)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_388" data-name="路径 388" d="M327.966,86.39l-.126.047h0Z" transform="translate(1307.26 13280.757)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_389" data-name="路径 389" d="M328.885,86.15Z" transform="translate(1307.071 13280.812)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_390" data-name="路径 390" d="M344.146,104.107l-7.176,4.169a2.352,2.352,0,0,0-.1-.51l-.141-.6a1.463,1.463,0,0,0-.078-.306c-.024-.1-.047-.2-.078-.306l-.094-.306a1.124,1.124,0,0,0-.086-.306l-.188-.6h0c-.047-.165-.11-.33-.165-.495v-.086c-.071-.2-.149-.385-.22-.573s-.086-.22-.126-.322l-.094-.236-.071-.157-.071-.173-.094-.22-.11-.243-.149-.314c-.078-.173-.157-.345-.251-.518a.43.43,0,0,0-.039-.086l-.055-.118-.188-.369-.11-.2-.094-.173v-.047l-.283-.51-.181-.306a.322.322,0,0,0-.055-.086c-.118-.2-.235-.408-.369-.6s-.306-.487-.471-.73l-.055-.086-.314-.455-.345-.479-.047-.047c-.126-.181-.259-.353-.393-.526l-.055-.071-.353-.432a1.043,1.043,0,0,0-.086-.11l-.22-.259c-.071-.094-.149-.173-.228-.259L330.6,95.7l-.141-.149a2.743,2.743,0,0,0-.212-.22l-.126-.141-.133-.133c-.086-.094-.188-.188-.275-.275l-.212-.2-.243-.236h0L329,94.113c-.047-.039-.086-.086-.141-.126l-.369-.322q-.259-.22-.518-.424l-.51-.393-.495-.345-.141-.094-.353-.236-.094-.063-.393-.236-.11-.063-.353-.2h0l-.33-.173-.149-.079-.463-.22-.463-.2-.463-.173-.141-.047-.322-.11-.471-.126-.244-.055-.243-.055h0l-.353-.063h-2.049l-.251.039h-.141l-.306.071h-.047l-.259.071h-.2a1.05,1.05,0,0,0-.165.071.352.352,0,0,0-.086,0l-.118.055-.188.086-.393.2,7.074-4.083.3-.157a3.453,3.453,0,0,1,.424-.188l.2-.079.126-.047.275-.079h0l.2-.055h3.007l.487.1h.141l.251.071h.079a4.545,4.545,0,0,1,.463.149l.189.071.275.1h.063l.306.133h.094l.275.126.2.094h0l.471.251h0l.346.2.11.063.3.181.188.118.361.236a.7.7,0,0,1,.133.094,3.983,3.983,0,0,1,.4.283h.094l.259.188.134.1.126.1c.11.079.22.173.33.259l.181.157.361.314.079.063.071.071c.173.149.338.306.51.471l.212.2.275.283c.165.157.322.322.479.495l.236.259.141.157.071.079.11.133c.063.063.11.126.165.188l.165.2.071.086.369.455.181.228c.11.141.212.275.314.424l.078.094c.181.251.369.51.542.785l.047.055c.079.126.157.251.243.369l.236.377c.157.251.314.5.463.785l.228.385.235.424v.055a.933.933,0,0,1,.094.173c.063.11.126.228.181.345s.118.22.173.338.149.29.212.432l.086.173.094.212.071.157a1.936,1.936,0,0,1,.078.188,1.868,1.868,0,0,1,.086.181c.055.126.11.251.157.377s.11.259.157.385,0,.055,0,.086a.331.331,0,0,1,0,.078,3.035,3.035,0,0,1,.118.306c.039.094.071.181.1.267s.118.33.173.495a.347.347,0,0,1,0,.086c.063.165.118.33.165.5v.228l.141.455.039.149.141.542a.233.233,0,0,1,0,.071h0a.4.4,0,0,0,.055.243,1.169,1.169,0,0,1,.078.361C343.848,103.691,344.115,103.942,344.146,104.107Z" transform="translate(1309.443 13280.793)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_391" data-name="路径 391" d="M342.4,114.412l.094.079a2.79,2.79,0,0,0-.243-.181Z" transform="translate(1304.163 13274.76)" fill="none"/>\n' +
    '    <path id="路径_392" data-name="路径 392" d="M343.628,115.412l.165.149-.283-.251Z" transform="translate(1303.893 13274.543)" fill="none"/>\n' +
    '    <path id="路径_393" data-name="路径 393" d="M345.164,116.972l.133.165c-.071-.094-.149-.181-.228-.267Z" transform="translate(1303.557 13274.209)" fill="none"/>\n' +
    '    <path id="路径_394" data-name="路径 394" d="M348.857,122.832c.015.028.028.057.039.086-.094-.236-.2-.471-.306-.7.039.086.086.173.118.259S348.81,122.738,348.857,122.832Z" transform="translate(1302.801 13273.059)" fill="none"/>\n' +
    '    <path id="路径_395" data-name="路径 395" d="M349.137,123.548c-.055-.141-.1-.275-.157-.408a.714.714,0,0,0,.1.259A.724.724,0,0,1,349.137,123.548Z" transform="translate(1302.717 13272.863)" fill="none"/>\n' +
    '    <path id="路径_396" data-name="路径 396" d="M349.427,124.351l.055.157a.961.961,0,0,0-.1-.3Z" transform="translate(1302.631 13272.631)" fill="none"/>\n' +
    '    <path id="路径_397" data-name="路径 397" d="M349.91,132.282a1.275,1.275,0,0,1,.1-.322.791.791,0,0,1-.055.181A.986.986,0,0,1,349.91,132.282Z" transform="translate(1302.518 13270.965)" fill="none"/>\n' +
    '    <path id="路径_398" data-name="路径 398" d="M350,131.852l.071-.322v.149Z" transform="translate(1302.498 13271.059)" fill="none"/>\n' +
    '    <path id="路径_399" data-name="路径 399" d="M350.15,131.376a2.13,2.13,0,0,0,.039-.236v.1A1.053,1.053,0,0,0,350.15,131.376Z" transform="translate(1302.466 13271.142)" fill="none"/>\n' +
    '    <path id="路径_400" data-name="路径 400" d="M350.23,130.861a2.363,2.363,0,0,0,0-.251,1.236,1.236,0,0,1,0,.173A.232.232,0,0,1,350.23,130.861Z" transform="translate(1302.449 13271.256)" fill="none"/>\n' +
    '    <path id="路径_401" data-name="路径 401" d="M350.28,128.232v-.086A.347.347,0,0,1,350.28,128.232Z" transform="translate(1302.438 13271.813)" fill="none"/>\n' +
    '    <path id="路径_402" data-name="路径 402" d="M350.28,130.4v0Z" transform="translate(1302.438 13271.377)" fill="none"/>\n' +
    '    <path id="路径_403" data-name="路径 403" d="M350.32,129.893v-.047Z" transform="translate(1302.429 13271.498)" fill="none"/>\n' +
    '    <path id="路径_404" data-name="路径 404" d="M354.3,111.659h0l-.078-.078Z" transform="translate(1301.591 13275.345)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_405" data-name="路径 405" d="M354.32,111.68l.141.165Z" transform="translate(1301.57 13275.324)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_406" data-name="路径 406" d="M354.649,112.072h0a1.156,1.156,0,0,1-.079-.1A.9.9,0,0,1,354.649,112.072Z" transform="translate(1301.516 13275.262)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_407" data-name="路径 407" d="M355.92,113.754h0c-.094-.149-.188-.29-.29-.424C355.724,113.463,355.826,113.6,355.92,113.754Z" transform="translate(1301.288 13274.97)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_408" data-name="路径 408" d="M356,113.87a2.7,2.7,0,0,1,.157.251,2.327,2.327,0,0,0-.165-.251Z" transform="translate(1301.211 13274.854)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_409" data-name="路径 409" d="M356.708,114.994h0l-.118-.2Z" transform="translate(1301.082 13274.656)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_410" data-name="路径 410" d="M357.036,115.584c-.1-.181-.2-.361-.306-.534h0C356.84,115.223,356.942,115.4,357.036,115.584Z" transform="translate(1301.052 13274.6)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_411" data-name="路径 411" d="M357.852,117.218h0a2.037,2.037,0,0,0-.1-.228C357.781,117.061,357.813,117.139,357.852,117.218Z" transform="translate(1300.833 13274.183)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_412" data-name="路径 412" d="M358.031,117.63h0a2.957,2.957,0,0,0-.141-.33A1.481,1.481,0,0,1,358.031,117.63Z" transform="translate(1300.803 13274.116)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_413" data-name="路径 413" d="M358.059,117.72v.086a.289.289,0,0,0-.039-.086Z" transform="translate(1300.775 13274.026)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_414" data-name="路径 414" d="M358.212,118.089h0l-.1-.259C358.149,117.916,358.181,118,358.212,118.089Z" transform="translate(1300.755 13274.004)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_415" data-name="路径 415" d="M358.3,118.309a1.217,1.217,0,0,1-.063-.149h0C358.264,118.207,358.279,118.262,358.3,118.309Z" transform="translate(1300.727 13273.933)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_416" data-name="路径 416" d="M358.4,118.564h0l-.071-.2A2.108,2.108,0,0,0,358.4,118.564Z" transform="translate(1300.708 13273.888)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_417" data-name="路径 417" d="M358.418,118.62l.071.212a.583.583,0,0,0-.079-.212Z" transform="translate(1300.691 13273.833)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_418" data-name="路径 418" d="M358.567,119.039h0l-.047-.149A1.113,1.113,0,0,0,358.567,119.039Z" transform="translate(1300.667 13273.775)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_419" data-name="路径 419" d="M358.578,119.08a1.268,1.268,0,0,0,.078.267,2.623,2.623,0,0,0-.086-.267Z" transform="translate(1300.656 13273.734)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_420" data-name="路径 420" d="M358.716,119.528h0a.165.165,0,0,0-.039-.11C358.637,119.387,358.7,119.489,358.716,119.528Z" transform="translate(1300.636 13273.664)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_421" data-name="路径 421" d="M358.8,119.8l-.071-.243h0Z" transform="translate(1300.622 13273.631)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_422" data-name="路径 422" d="M359.191,121.4h0l-.071-.33C359.144,121.18,359.175,121.29,359.191,121.4Z" transform="translate(1300.538 13273.305)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_423" data-name="路径 423" d="M359.273,121.9a1.828,1.828,0,0,0-.063-.361h0A2.213,2.213,0,0,1,359.273,121.9Z" transform="translate(1300.519 13273.204)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_424" data-name="路径 424" d="M359.41,122.833h0a.687.687,0,0,0,0-.133A.8.8,0,0,1,359.41,122.833Z" transform="translate(1300.476 13272.955)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_425" data-name="路径 425" d="M359.41,122.974a.375.375,0,0,0,0-.094h0Z" transform="translate(1300.476 13272.917)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_426" data-name="路径 426" d="M359.46,124.42v.173h0A1.236,1.236,0,0,0,359.46,124.42Z" transform="translate(1300.465 13272.588)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_427" data-name="路径 427" d="M359.42,125.008V125Z" transform="translate(1300.474 13272.525)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_428" data-name="路径 428" d="M359.46,124.64v0Z" transform="translate(1300.465 13272.541)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_429" data-name="路径 429" d="M359.38,125.463a1.229,1.229,0,0,0,0-.243,1.205,1.205,0,0,1,0,.236Z" transform="translate(1300.482 13272.413)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_430" data-name="路径 430" d="M359.43,125.08a.454.454,0,0,1,0,.11.446.446,0,0,0,0-.1Z" transform="translate(1300.472 13272.444)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_431" data-name="路径 431" d="M359.31,125.966v-.126a.593.593,0,0,1,0,.118Z" transform="translate(1300.497 13272.281)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_432" data-name="路径 432" d="M359.38,125.52a.33.33,0,0,1,0,.086v-.078Z" transform="translate(1300.482 13272.347)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_433" data-name="路径 433" d="M359.219,126.379v-.149a.91.91,0,0,0,0,.141Z" transform="translate(1300.517 13272.198)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_434" data-name="路径 434" d="M359.32,126a.668.668,0,0,1,0,.133.356.356,0,0,0,0-.126Z" transform="translate(1300.495 13272.246)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_435" data-name="路径 435" d="M359.2,126.41l-.094.369h0A2.814,2.814,0,0,0,359.2,126.41Z" transform="translate(1300.54 13272.161)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_436" data-name="路径 436" d="M358.94,127.327a.938.938,0,0,0,.055-.157l-.047.157Z" transform="translate(1300.577 13271.995)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_437" data-name="路径 437" d="M359.1,126.88a.108.108,0,0,1-.039.1.45.45,0,0,0,0-.094Z" transform="translate(1300.551 13272.061)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_438" data-name="路径 438" d="M355.817,120.929h0v.7a.446.446,0,0,1,0,.1,1.219,1.219,0,0,1,0,.243v.345a.356.356,0,0,1,0,.126.239.239,0,0,1,0,.078v.149a2.825,2.825,0,0,1-.094.369.43.43,0,0,1,0,.094.591.591,0,0,1-.039.126.922.922,0,0,1-.055.157c-.047.141-.11.275-.165.408h0a4.93,4.93,0,0,1-.267.495l-.094.133c-.039.055-.071.11-.11.157l-.133.165-.079.086-.157.165-.2.173-.2.149h0l-.236.149-7.176,4.169.259-.165.181-.141a3.427,3.427,0,0,0,.636-.667,1.968,1.968,0,0,0,.157-.228h0a2.986,2.986,0,0,0,.275-.495v-.063a2.265,2.265,0,0,0,.1-.243.149.149,0,0,1,.039-.1c.039-.031.055-.157.078-.236a.978.978,0,0,0,.047-.141.235.235,0,0,1,.055-.181h0l.047-.173v-.149a.232.232,0,0,0,0-.071,1.083,1.083,0,0,1,0-.134v-.1a.6.6,0,0,0,0-.165.232.232,0,0,0,0-.079,1.3,1.3,0,0,0,0-.173.292.292,0,0,0,0-.086v-1.421a.085.085,0,0,0,0-.039v-.22a.347.347,0,0,0,0-.086v-.361l-.047-.353-.071-.369-.071-.377a1.626,1.626,0,0,0-.086-.377c-.031-.126-.07-.259-.1-.385a3.475,3.475,0,0,0-.118-.377c-.047-.126,0-.141-.063-.22l-.055-.157-.047-.141-.078-.22-.079-.212a.487.487,0,0,0-.055-.149c-.016-.047-.071-.173-.1-.259a.92.92,0,0,0-.039-.086c-.047-.118-.094-.236-.149-.353s-.078-.173-.118-.259q0-.043,0-.086c-.039-.079-.071-.157-.118-.236a1.136,1.136,0,0,0-.063-.141l-.212-.408c-.11-.212-.228-.416-.346-.62s-.377-.62-.581-.919l-.039-.063c-.079-.118-.157-.236-.243-.345a2.247,2.247,0,0,0-.157-.22l-.314-.416-.283-.345c-.047-.063-.094-.11-.141-.165l-.133-.165-.094-.1-.188-.2-.3-.314-.306-.3-.149-.149-.165-.149-.118-.1-.2-.173a3.328,3.328,0,0,0-.322-.259l-.157-.126-.063-.047-.094-.078-.149-.1,7.176-4.169.141.11c.11.078.22.157.322.243l.071.055.2.157.055.047h0l.322.283.314.29.306.3.071.079.22.236c.071.078.141.149.2.228l.078.079.141.165.055.063a1.149,1.149,0,0,0,.079.1h0l.094.11.188.236c.11.133.212.275.314.416a1.984,1.984,0,0,1,.149.2c.1.133.2.275.29.424a2.29,2.29,0,0,1,.165.251c.1.149.2.314.3.471l.118.2c.11.173.2.353.306.534a.1.1,0,0,0,.039.078l.212.408.071.141c.039.078.079.157.11.236s.039.078.055.126a1.97,1.97,0,0,1,.1.228h0a2.964,2.964,0,0,1,.141.33.29.29,0,0,1,.039.086l.1.259a1.2,1.2,0,0,0,.063.149h0l.071.2a.774.774,0,0,0,.078.212l.047.149a2.628,2.628,0,0,1,.086.267.177.177,0,0,0,.039.11l.071.243.039.133c.039.133.071.259.1.385s.063.251.086.385a.085.085,0,0,1,0,.047l.071.33a2.057,2.057,0,0,0,.063.361,1.906,1.906,0,0,0,.047.361,1.026,1.026,0,0,1,0,.22.677.677,0,0,1,0,.133.375.375,0,0,1,0,.094v.6C355.88,120.732,355.817,120.787,355.817,120.929Z" transform="translate(1304.116 13275.888)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_439" data-name="路径 439" d="M323.111,92.9c5.394,3.14,9.916,9.987,11.164,16.487,3.588,2.552,6.359,7.663,6.344,11.91,0,4.585-3.25,6.43-7.239,4.13a14.134,14.134,0,0,1-4.507-4.42,9.955,9.955,0,0,1-5.841-1.57,20.735,20.735,0,0,1-5.425-4.711,6.477,6.477,0,0,1-4.436-1,17.414,17.414,0,0,1-7.922-13.708c0-4.711,3.14-6.791,7.105-4.985C314.1,91.137,318.267,90.085,323.111,92.9Z" transform="translate(1312.115 13279.702)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_440" data-name="路径 440" d="M328.14,93.393l.393.236-.5-.3Z" transform="translate(1307.219 13279.27)" fill="none"/>\n' +
    '    <path id="路径_441" data-name="路径 441" d="M328.764,93.773l.353.236-.448-.3Z" transform="translate(1307.082 13279.187)" fill="none"/>\n' +
    '    <path id="路径_442" data-name="路径 442" d="M331.961,96.226l.259.228-.4-.353C331.883,96.139,331.961,96.186,331.961,96.226Z" transform="translate(1306.405 13278.672)" fill="none"/>\n' +
    '    <path id="路径_443" data-name="路径 443" d="M332.594,96.8l.212.2-.455-.44Z" transform="translate(1306.291 13278.573)" fill="none"/>\n' +
    '    <path id="路径_444" data-name="路径 444" d="M333.2,97.395l.133.133-.408-.408A3.02,3.02,0,0,0,333.2,97.395Z" transform="translate(1306.166 13278.453)" fill="none"/>\n' +
    '    <path id="路径_445" data-name="路径 445" d="M333.822,98.04l.141.149-.353-.369a2.784,2.784,0,0,1,.212.22Z" transform="translate(1306.02 13278.303)" fill="none"/>\n' +
    '    <path id="路径_446" data-name="路径 446" d="M334.94,99.329a1.054,1.054,0,0,1,.086.11l-.306-.369Z" transform="translate(1305.781 13278.033)" fill="none"/>\n' +
    '    <path id="路径_447" data-name="路径 447" d="M336.964,101.975l.055.086-.369-.542Z" transform="translate(1305.367 13277.51)" fill="none"/>\n' +
    '    <path id="路径_448" data-name="路径 448" d="M338.974,105.293l.11.2c-.071-.126-.133-.251-.2-.369Z" transform="translate(1304.888 13276.734)" fill="none"/>\n' +
    '    <path id="路径_449" data-name="路径 449" d="M340.12,107.623l.094.22c-.063-.157-.133-.306-.2-.463Z" transform="translate(1304.645 13276.247)" fill="none"/>\n' +
    '    <path id="路径_450" data-name="路径 450" d="M340.431,108.347l.094.236-.165-.393Z" transform="translate(1304.57 13276.074)" fill="none"/>\n' +
    '    <path id="路径_451" data-name="路径 451" d="M302.271,172.14h0l-.071.039Z" transform="translate(1312.77 13262.333)" fill="none"/>\n' +
    '    <path id="路径_452" data-name="路径 452" d="M302.7,172Z" transform="translate(1312.682 13262.361)" fill="none"/>\n' +
    '    <path id="路径_453" data-name="路径 453" d="M302.9,172Z" transform="translate(1312.619 13262.361)" fill="none"/>\n' +
    '    <path id="路径_454" data-name="路径 454" d="M303.07,172Z" transform="translate(1312.583 13262.361)" fill="none"/>\n' +
    '    <path id="路径_455" data-name="路径 455" d="M303.218,172h-.008Z" transform="translate(1312.553 13262.361)" fill="none"/>\n' +
    '    <path id="路径_456" data-name="路径 456" d="M303.37,172Z" transform="translate(1312.518 13262.361)" fill="none"/>\n' +
    '    <path id="路径_457" data-name="路径 457" d="M303.634,172h-.024Z" transform="translate(1312.467 13262.361)" fill="none"/>\n' +
    '    <path id="路径_458" data-name="路径 458" d="M304.128,172.2h0l-.118-.047Z" transform="translate(1312.381 13262.329)" fill="none"/>\n' +
    '    <path id="路径_459" data-name="路径 459" d="M305.409,170.36Z" transform="translate(1312.089 13262.715)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_460" data-name="路径 460" d="M305.64,170.29Z" transform="translate(1312.03 13262.73)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_461" data-name="路径 461" d="M305.83,170.27Z" transform="translate(1311.99 13262.734)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_462" data-name="路径 462" d="M306.29,170.28Z" transform="translate(1311.891 13262.731)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_463" data-name="路径 463" d="M306.36,170.29Z" transform="translate(1311.876 13262.73)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_464" data-name="路径 464" d="M306.09,170.518l-2.293,1.335h0l-.1-.039h-1.3l2.245-1.3h1.288l.1.039h0l.1.047Z" transform="translate(1312.727 13262.683)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_465" data-name="路径 465" d="M307.1,170.52Z" transform="translate(1311.717 13262.679)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_466" data-name="路径 466" d="M305.579,170.84Z" transform="translate(1312.06 13262.611)" fill="none"/>\n' +
    '    <path id="路径_467" data-name="路径 467" d="M306.185,170.71h-.055Z" transform="translate(1311.925 13262.641)" fill="none"/>\n' +
    '    <path id="路径_468" data-name="路径 468" d="M306.861,170.73h-.031Z" transform="translate(1311.775 13262.636)" fill="none"/>\n' +
    '    <path id="路径_469" data-name="路径 469" d="M307.07,170.76h0Z" transform="translate(1311.723 13262.63)" fill="none"/>\n' +
    '    <path id="路径_470" data-name="路径 470" d="M307.637,170.916l.149.055-.2-.071Z" transform="translate(1311.612 13262.6)" fill="none"/>\n' +
    '    <path id="路径_471" data-name="路径 471" d="M308.38,171.243h0l-.11-.063Z" transform="translate(1311.466 13262.538)" fill="none"/>\n' +
    '    <path id="路径_472" data-name="路径 472" d="M309.36,169Z" transform="translate(1311.231 13263.007)" fill="none"/>\n' +
    '    <path id="路径_473" data-name="路径 473" d="M308.5,169.14Z" transform="translate(1311.429 13262.979)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_474" data-name="路径 474" d="M308.549,169.12h-.039Z" transform="translate(1311.414 13262.98)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_475" data-name="路径 475" d="M308.85,169.05Z" transform="translate(1311.341 13262.996)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_476" data-name="路径 476" d="M313.815,174.882l-2.3,1.335a1.218,1.218,0,0,0,0-.165l-.047-.2v-.188a.4.4,0,0,0,0-.1v-.094a.636.636,0,0,0-.063-.2h0c0-.055-.039-.1-.055-.157h0l-.071-.181-.047-.1v-.251a.239.239,0,0,1,0-.079l-.047-.1-.086-.165h0V174.2l-.055-.118-.039-.063a.125.125,0,0,0,0-.055h0l-.094-.165-.055-.094h0c-.039-.063-.079-.126-.126-.188s-.094-.157-.149-.236h0l-.1-.141-.11-.157h0l-.126-.165h0l-.118-.141h0l-.071-.086-.071-.079-.1-.118-.039-.047-.071-.071-.039-.039-.047-.047a.449.449,0,0,0-.086-.086l-.071-.071-.079-.071h0a.754.754,0,0,0-.079-.079l-.047-.039-.118-.1-.165-.133-.165-.126-.157-.11h-.047l-.11-.079h0l-.126-.079H308.4l-.11-.063h0l-.1-.055h-.047l-.149-.071-.149-.063-.149-.055h-.149l-.149-.047h-1.437l-.126.071,2.3-1.335.094-.055.134-.063h1.2l.157.039h.126l.149.047h.149l.094.047h.149l.149.078h0l.11.063h0l.094.063h.063l.11.079h.047l.126.086h0l.086.063h.039l.11.086.055.047.118.1h0l.165.157.063.063.094.086.149.165.079.079.039.055h0v.039l.055.063.047.063h0l.118.149.055.071.1.133v.039a2.679,2.679,0,0,1,.173.243h0a1.026,1.026,0,0,1,.079.118l.078.126c.047.078.1.157.149.243l.071.118.079.141h0v.055a.5.5,0,0,1,.063.11s.039.071.055.11l.071.141v.055a.469.469,0,0,1,0,.063v.173a.782.782,0,0,1,.055.118l.047.126h0a.149.149,0,0,0,.039.1c.039.031,0,.055,0,.086a1.272,1.272,0,0,0,.055.157h0a1.351,1.351,0,0,0,.055.165h0a.943.943,0,0,1,.039.141v.055l.047.173h0v.188C313.815,174.772,313.815,174.827,313.815,174.882Z" transform="translate(1311.99 13262.905)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_477" data-name="路径 477" d="M313.149,178.085h0l-.078-.055Z" transform="translate(1310.434 13261.065)" fill="none"/>\n' +
    '    <path id="路径_478" data-name="路径 478" d="M313.559,178.411l.047.047-.086-.078Z" transform="translate(1310.337 13260.991)" fill="none"/>\n' +
    '    <path id="路径_479" data-name="路径 479" d="M314.041,178.911l.047.047a.745.745,0,0,0-.078-.078Z" transform="translate(1310.232 13260.886)" fill="none"/>\n' +
    '    <path id="路径_480" data-name="路径 480" d="M315.222,180.79h0a.555.555,0,0,0-.1-.22.421.421,0,0,1,.039.086Z" transform="translate(1309.993 13260.519)" fill="none"/>\n' +
    '    <path id="路径_481" data-name="路径 481" d="M315.316,181.014l-.047-.133a.378.378,0,0,0,0,.086A.063.063,0,0,1,315.316,181.014Z" transform="translate(1309.962 13260.454)" fill="none"/>\n' +
    '    <path id="路径_482" data-name="路径 482" d="M315.409,181.269v.055a.442.442,0,0,1,0-.094A.384.384,0,0,0,315.409,181.269Z" transform="translate(1309.932 13260.38)" fill="none"/>\n' +
    '    <path id="路径_483" data-name="路径 483" d="M315.57,183.812v-.1a.154.154,0,0,1,0,.055Z" transform="translate(1309.896 13259.846)" fill="none"/>\n' +
    '    <path id="路径_484" data-name="路径 484" d="M315.61,183.672v0Z" transform="translate(1309.888 13259.873)" fill="none"/>\n' +
    '    <path id="路径_485" data-name="路径 485" d="M315.64,183.521v-.071h0a.086.086,0,0,1,0,.071Z" transform="translate(1309.881 13259.902)" fill="none"/>\n' +
    '    <path id="路径_486" data-name="路径 486" d="M315.67,183.359v-.079a.157.157,0,0,1,0,.055Z" transform="translate(1309.876 13259.938)" fill="none"/>\n' +
    '    <path id="路径_487" data-name="路径 487" d="M315.68,182.513v-.063a.056.056,0,0,1,0,.039Z" transform="translate(1309.873 13260.116)" fill="none"/>\n' +
    '    <path id="路径_488" data-name="路径 488" d="M315.68,183.208v0Z" transform="translate(1309.873 13259.979)" fill="none"/>\n' +
    '    <path id="路径_489" data-name="路径 489" d="M315.7,183.08Z" transform="translate(1309.869 13259.98)" fill="none"/>\n' +
    '    <path id="路径_490" data-name="路径 490" d="M317,177.22Z" transform="translate(1309.589 13261.24)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_491" data-name="路径 491" d="M316.987,177.22v.055l-.047-.055Z" transform="translate(1309.602 13261.24)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_492" data-name="路径 492" d="M317.09,177.35Z" transform="translate(1309.57 13261.211)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_493" data-name="路径 493" d="M317.484,177.881h0l-.094-.141Z" transform="translate(1309.506 13261.127)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_494" data-name="路径 494" d="M317.51,177.92l.055.078Z" transform="translate(1309.48 13261.09)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_495" data-name="路径 495" d="M317.739,178.271h0l-.039-.071A.449.449,0,0,0,317.739,178.271Z" transform="translate(1309.439 13261.031)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_496" data-name="路径 496" d="M317.844,178.465l-.094-.165h0Z" transform="translate(1309.428 13261.008)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_497" data-name="路径 497" d="M318.11,178.981h0a.285.285,0,0,0,0-.071A.285.285,0,0,1,318.11,178.981Z" transform="translate(1309.351 13260.877)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_498" data-name="路径 498" d="M318.159,179.122h0a.149.149,0,0,0-.039-.1A.554.554,0,0,1,318.159,179.122Z" transform="translate(1309.349 13260.854)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_499" data-name="路径 499" d="M318.17,179.15Z" transform="translate(1309.338 13260.825)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_500" data-name="路径 500" d="M318.229,179.265h0v-.086A.249.249,0,0,0,318.229,179.265Z" transform="translate(1309.326 13260.821)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_501" data-name="路径 501" d="M318.25,179.337v-.047h0Z" transform="translate(1309.321 13260.794)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_502" data-name="路径 502" d="M318.29,179.421h0a.125.125,0,0,0,0-.071A.279.279,0,0,1,318.29,179.421Z" transform="translate(1309.312 13260.782)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_503" data-name="路径 503" d="M318.29,179.44v.063A.241.241,0,0,0,318.29,179.44Z" transform="translate(1309.312 13260.766)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_504" data-name="路径 504" d="M318.339,179.575h0a.207.207,0,0,1,0-.055A.207.207,0,0,0,318.339,179.575Z" transform="translate(1309.302 13260.746)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_505" data-name="路径 505" d="M318.34,179.59v0Z" transform="translate(1309.302 13260.73)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_506" data-name="路径 506" d="M318.39,179.729h0v-.039Z" transform="translate(1309.291 13260.712)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_507" data-name="路径 507" d="M318.41,179.819a.292.292,0,0,0,0-.079h0a.235.235,0,0,1,0,.078Z" transform="translate(1309.287 13260.699)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_508" data-name="路径 508" d="M318.54,180.33h0v0Z" transform="translate(1309.259 13260.596)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_509" data-name="路径 509" d="M318.57,180.478v-.118h0Z" transform="translate(1309.252 13260.567)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_510" data-name="路径 510" d="M318.6,180.8Z" transform="translate(1309.245 13260.471)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_511" data-name="路径 511" d="M318.61,180.838Z" transform="translate(1309.244 13260.464)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_512" data-name="路径 512" d="M318.62,181.3v.055h0Z" transform="translate(1309.242 13260.365)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_513" data-name="路径 513" d="M318.61,181.483v0Z" transform="translate(1309.244 13260.347)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_514" data-name="路径 514" d="M318.62,181.37Z" transform="translate(1309.242 13260.35)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_515" data-name="路径 515" d="M318.589,181.629v-.078A.268.268,0,0,0,318.589,181.629Z" transform="translate(1309.249 13260.31)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_516" data-name="路径 516" d="M318.61,181.51Z" transform="translate(1309.244 13260.316)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_517" data-name="路径 517" d="M318.57,181.79Z" transform="translate(1309.252 13260.26)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_518" data-name="路径 518" d="M318.6,181.65Z" transform="translate(1309.245 13260.288)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_519" data-name="路径 519" d="M318.54,181.917v0Z" transform="translate(1309.259 13260.241)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_520" data-name="路径 520" d="M318.58,181.79v.039A.056.056,0,0,0,318.58,181.79Z" transform="translate(1309.25 13260.26)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_521" data-name="路径 521" d="M318.549,181.93a.655.655,0,0,0,0,.118h0A.521.521,0,0,0,318.549,181.93Z" transform="translate(1309.257 13260.229)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_522" data-name="路径 522" d="M318.45,182.225v0Z" transform="translate(1309.278 13260.178)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_523" data-name="路径 523" d="M318.51,182.08Z" transform="translate(1309.265 13260.197)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_524" data-name="路径 524" d="M317.516,180.326h0v.22h0v.078h0a.1.1,0,0,1,0,.047h0a.055.055,0,0,1,0,.039h0v.047a.513.513,0,0,1,0,.118h0v.055l-.047.126h0a.932.932,0,0,1-.086.149v.047l-.039.055-.039.047h0l-.055.047-.22.322h0l-.071.047h0l-.078.047-2.292,1.335.086-.055h.055a1.1,1.1,0,0,0,.2-.22.206.206,0,0,0,.047-.071h0a.99.99,0,0,0,.086-.157h0a.765.765,0,0,1,0-.078h0v-.118a.148.148,0,0,0,0-.055h0v-.1h0v-.055h0a.16.16,0,0,0,0-.055v-.149h0v-.118h0v-.212h0a.218.218,0,0,0,0-.071h0a.054.054,0,0,0,0-.039.246.246,0,0,0,0-.079.542.542,0,0,0,0-.11v-.487a.685.685,0,0,0-.039-.118v-.126a.35.35,0,0,1,0-.039v-.188a.4.4,0,0,1,0-.086h0l-.047-.11a.416.416,0,0,0-.039-.086h0a.719.719,0,0,0-.039-.078v-.047a.928.928,0,0,1-.063-.126l-.118-.2c-.055-.1-.118-.2-.181-.29h0l-.078-.11-.047-.071-.1-.133a1.059,1.059,0,0,1-.086-.11l-.047-.055-.047-.047h0l-.055-.071-.094-.1-.1-.094-.047-.047-.047-.047h-.039l-.071-.055-.1-.086h-.094l2.3-1.335h.047l.1.079h0l.055.047h0a.537.537,0,0,0,.1.086l.1.094.094.1h0l.071.071.063.071h0l.047.055h0v.039l.063.071.1.133.047.063.094.141.055.079.094.149.039.071.094.165h0a.926.926,0,0,1,.063.126v.047a.1.1,0,0,0,.039.079h0a.279.279,0,0,1,0,.071h0a.149.149,0,0,0,.039.1h0v.134h0a.127.127,0,0,1,0,.071.246.246,0,0,1,0,.063.184.184,0,0,0,0,.055v.118a.291.291,0,0,1,0,.078h0a.981.981,0,0,1,0,.126.6.6,0,0,1,0,.126h0V180a.525.525,0,0,0,0,.11.215.215,0,0,0,0,.071v.126a.57.57,0,0,1,0,.11Z" transform="translate(1310.346 13261.273)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_525" data-name="路径 525" d="M307,171.2a8.244,8.244,0,0,1,3.572,5.276,5.142,5.142,0,0,1,2.033,3.808c0,1.468-1.044,2.057-2.316,1.327a4.443,4.443,0,0,1-1.445-1.421,3.14,3.14,0,0,1-1.869-.495,6.586,6.586,0,0,1-1.735-1.5,2.073,2.073,0,0,1-1.421-.322,5.582,5.582,0,0,1-2.536-4.389c0-1.507,1-2.167,2.277-1.57C304.106,170.645,305.441,170.307,307,171.2Z" transform="translate(1312.968 13262.641)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_526" data-name="路径 526" d="M308.6,171.366l.126.078-.165-.094Z" transform="translate(1311.403 13262.502)" fill="none"/>\n' +
    '    <path id="路径_527" data-name="路径 527" d="M308.8,171.486l.11.079-.141-.094Z" transform="translate(1311.358 13262.476)" fill="none"/>\n' +
    '    <path id="路径_528" data-name="路径 528" d="M309.827,172.269a.745.745,0,0,1,.078.079l-.126-.118Z" transform="translate(1311.141 13262.313)" fill="none"/>\n' +
    '    <path id="路径_529" data-name="路径 529" d="M309.979,172.451l.071.071-.149-.141Z" transform="translate(1311.115 13262.278)" fill="none"/>\n' +
    '    <path id="路径_530" data-name="路径 530" d="M310.216,172.646l.047.047-.133-.133A.446.446,0,0,1,310.216,172.646Z" transform="translate(1311.066 13262.241)" fill="none"/>\n' +
    '    <path id="路径_531" data-name="路径 531" d="M310.421,172.851l.039.047-.11-.118Z" transform="translate(1311.019 13262.194)" fill="none"/>\n' +
    '    <path id="路径_532" data-name="路径 532" d="M310.774,173.258h0l-.094-.118Z" transform="translate(1310.948 13262.116)" fill="none"/>\n' +
    '    <path id="路径_533" data-name="路径 533" d="M311.418,174.1h0l-.118-.173Z" transform="translate(1310.815 13261.948)" fill="none"/>\n' +
    '    <path id="路径_534" data-name="路径 534" d="M312.061,175.175l.039.063-.071-.118A.125.125,0,0,1,312.061,175.175Z" transform="translate(1310.657 13261.69)" fill="none"/>\n' +
    '    <path id="路径_535" data-name="路径 535" d="M312.423,175.919v.071a.838.838,0,0,1-.063-.149A.233.233,0,0,0,312.423,175.919Z" transform="translate(1310.587 13261.537)" fill="none"/>\n' +
    '    <path id="路径_536" data-name="路径 536" d="M312.527,176.155v.071l-.047-.126Z" transform="translate(1310.561 13261.48)" fill="none"/>\n' +
    '    <path id="路径_537" data-name="路径 537" d="M81.669,77.006,72.64,71.761l3.525-.031L85.2,76.982Z" transform="translate(1362.1 13283.907)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_538" data-name="路径 538" d="M56.328,124.653,47.3,119.4l-1.5-3.321,9.037,5.252Z" transform="translate(1367.867 13274.38)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_539" data-name="路径 539" d="M73.717,76.441,64.68,71.189l3.933-2.379,9.029,5.252Z" transform="translate(1363.811 13284.536)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_540" data-name="路径 540" d="M51,118.543l-9.029-5.252.369-4.711,9.029,5.245Z" transform="translate(1368.691 13275.99)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_541" data-name="路径 541" d="M69.219,77.124,60.19,71.879l3.525-.039,9.037,5.252Z" transform="translate(1364.775 13283.886)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_542" data-name="路径 542" d="M51.058,112.913l-9.029-5.245-1.5-3.329,9.037,5.252Z" transform="translate(1369 13276.901)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_543" data-name="路径 543" d="M64.857,81.311,55.82,76.067l3.431-4.177,9.029,5.245Z" transform="translate(1365.714 13283.875)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_544" data-name="路径 544" d="M49.567,108.219l-9.037-5.252,2.143-5.017,9.037,5.245Z" transform="translate(1369 13278.272)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_545" data-name="路径 545" d="M57.127,90.5,48.09,85.255l2.143-5.025,9.029,5.252Z" transform="translate(1367.375 13282.08)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_546" data-name="路径 546" d="M59.849,84.833,50.82,79.581l3.926-2.371,9.037,5.245Z" transform="translate(1366.789 13282.733)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_547" data-name="路径 547" d="M52.3,101.905,43.26,96.661l.361-4.711,9.037,5.245Z" transform="translate(1368.413 13279.566)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_548" data-name="路径 548" d="M52.757,96.051,43.72,90.807l3.431-4.177,9.037,5.245Z" transform="translate(1368.314 13280.708)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_549" data-name="路径 549" d="M67.467,77.91,71,77.879,74.926,75.5l2.316,2.316,3.533-.024.581,4.13,2.316,2.324-1.288,5.009.581,4.145-2.874,4.734L78.8,103.144l-3.792,3.376-2.866,4.734-3.839,1.24-3.784,3.376-3.015-1.178-3.839,1.24-1.492-3.321-3.015-1.178.369-4.719-1.492-3.321,2.143-5.025.361-4.711,3.431-4.177,2.135-5.017,3.933-2.379Z" transform="translate(1366.527 13283.099)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <ellipse id="椭圆_197" data-name="椭圆 197" cx="4.051" cy="2.269" rx="4.051" ry="2.269" transform="translate(1432.296 13382.696) rotate(-65.86)" fill="#5f98ed" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_550" data-name="路径 550" d="M160.529,87.1l-2.889-1.68,4.452-7.71,2.889,1.68Z" transform="translate(1343.834 13282.625)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_551" data-name="路径 551" d="M165.6,78.729l-2.889-1.68a2.732,2.732,0,0,1-1.225-1.939l2.889,1.672a2.732,2.732,0,0,0,1.225,1.947" transform="translate(1343.007 13283.183)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_552" data-name="路径 552" d="M158.677,89.215a.907.907,0,0,0-.2,0h-1.052l-.181.055-.149.047-.2.079-.2.086-.165.086a2.285,2.285,0,0,0-.275.141,6.215,6.215,0,0,0-.785.534l-.345.275c-.126.118-.259.236-.377.361l-.251.251-.243.275-.188.22-.181.22-.3.408c-.063.094-.133.188-.188.29a.785.785,0,0,0-.071.1.837.837,0,0,0-.094.157c-.055.071-.094.149-.141.22h0s-.133.236-.2.353-.126.251-.2.385-.118.259-.173.385l-.1.243-.071.165v.071c-.047.118-.086.236-.126.353l-.141.463v.141a2.109,2.109,0,0,0-.055.212.257.257,0,0,1-.039.165,1.956,1.956,0,0,0-.079.424v.2a.1.1,0,0,0,0,.047v.62a1.986,1.986,0,0,0,0,.22,3.129,3.129,0,0,0,1.311,2.881l-2.881-1.672a3.216,3.216,0,0,1-1.319-2.889h0v-.424a1.284,1.284,0,0,1,.039-.393c.039-.126,0,0,0-.047v-.086a.55.55,0,0,1,.039-.228,1.765,1.765,0,0,1,.047-.283.257.257,0,0,1,.039-.165,2.355,2.355,0,0,1,.063-.251v-.1l.141-.463c.047-.141.1-.283.157-.424l.063-.165c0-.079.071-.157.1-.243h0a2.9,2.9,0,0,1,.126-.275.1.1,0,0,1,.039-.079l.188-.385.212-.377.236-.385.259-.385c.086-.118.165-.243.251-.353a.165.165,0,0,0,.047-.063l.338-.4.243-.275.251-.251a9.313,9.313,0,0,1,.73-.644l.188-.141a1.717,1.717,0,0,1,.2-.133,3.474,3.474,0,0,1,.385-.243l.314-.22.236-.1H154l.243-.094.212-.063h.055l.385-.086h.628a1.2,1.2,0,0,1,.236,0Z" transform="translate(1345.686 13280.51)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_553" data-name="路径 553" d="M172,65.209h0l-.212-.1h0l-.181-.063h-.526a1.263,1.263,0,0,0-.3,0h-.393l-.267.047h-.212l-.448.165h0l-.243.11-.369.2-.408.251-.283.212a3.081,3.081,0,0,0-.251.2,6.816,6.816,0,0,0-.557.51,6.192,6.192,0,0,0-.495.518l-.11.126-.141.181a1.652,1.652,0,0,0-.11.133l-.149.2-.149.212c-.094.126-.181.259-.267.393s-.157.251-.228.377h0c-.071.126-.141.243-.2.377h0c-.063.11-.118.22-.173.33v.1c-.055.118-.11.228-.149.338s-.118.267-.173.4-.1.283-.149.424l-.141.463c-.047.173-.086.338-.126.51a3.816,3.816,0,0,0-.079.463L161.62,70.6a2.463,2.463,0,0,1,.078-.471h0a1.733,1.733,0,0,1,.086-.377c.031-.126,0-.079,0-.11a1.58,1.58,0,0,1,.055-.2.935.935,0,0,1,.079-.251c.024-.079,0-.086,0-.118l.063-.181a.962.962,0,0,0,.055-.133,4.319,4.319,0,0,1,.165-.4.615.615,0,0,1,.1-.236,1.361,1.361,0,0,1,.079-.149v-.055a2.584,2.584,0,0,1,.165-.33,4.289,4.289,0,0,1,.212-.377l.228-.385.267-.393.173-.236.126-.165c.118-.157.236-.306.361-.448h0l.079-.094c.118-.133.236-.259.361-.377l.047-.047a7.224,7.224,0,0,1,1.523-1.209l.314-.173.314-.141a1.572,1.572,0,0,1,.243-.094h.055a1.083,1.083,0,0,1,.212-.063h.149a1.336,1.336,0,0,1,.243-.047h.911a1.467,1.467,0,0,1,.251.063h.118l.118.047.228.11h0Z" transform="translate(1342.979 13285.713)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_554" data-name="路径 554" d="M148.079,81.62l-2.889-1.672,12.789-7.388,2.889,1.672Z" transform="translate(1346.51 13283.729)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_555" data-name="路径 555" d="M144.383,80.892l-.1-.055-.094-.047h0a.487.487,0,0,0-.149-.055.254.254,0,0,0-.071,0h0a1.572,1.572,0,0,0-.2-.047h-.393a.957.957,0,0,0-.212,0h-.338a2.84,2.84,0,0,0-.4.086h0l-.165.055h-.071l-.236.086h0a1.194,1.194,0,0,0-.141.071c-.157.071-.314.149-.479.243a5.444,5.444,0,0,0-.683.455l-.22.173a.165.165,0,0,0-.063.047c-.181.149-.369.314-.542.487l-.039.039c-.157.157-.306.322-.455.495h0l-.33.4c-.1.133-.2.267-.3.408s-.181.251-.267.393-.157.251-.228.377l-.173.3a.413.413,0,0,1-.047.079l-.055.126c-.047.086-.094.173-.133.259s-.126.259-.181.393l-.165.408h0a1.464,1.464,0,0,0-.079.2,1.121,1.121,0,0,0-.071.212c-.039.1-.071.212-.1.322l-.047.133v.079l-.047.188a1.3,1.3,0,0,1-.055.251c-.016.079-.047.212-.063.314a1.018,1.018,0,0,0,0,.22v.141a3.423,3.423,0,0,0,0,.4,3.689,3.689,0,0,0,0,.416h0a3.14,3.14,0,0,0,1.319,2.889l-2.889-1.68a3.206,3.206,0,0,1-1.319-2.889h0a3.868,3.868,0,0,1,0-.424,1.727,1.727,0,0,1,.039-.448l.047-.314a1.412,1.412,0,0,1,.063-.306c.023-.1,0-.157.055-.236a2.223,2.223,0,0,1,.071-.291c.039-.149.086-.3.141-.455s.094-.283.149-.424l.165-.408.181-.393h0l.047-.086c.047-.1.094-.2.149-.291s.133-.259.212-.385l.228-.377h0l.047-.086.212-.306c.094-.141.2-.275.3-.408h0l.188-.236.141-.165h0l.047-.055c.063-.079.133-.149.2-.22l.243-.251.361-.338a6.753,6.753,0,0,1,1.146-.832l.322-.173.314-.141h.071l.157-.055.2-.071h.228a1.908,1.908,0,0,1,.2-.047h.086a.784.784,0,0,1,.2,0h.675l.1-.039h0a.832.832,0,0,1,.2.071h0a.872.872,0,0,1,.228.11Z" transform="translate(1348.894 13282.348)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_556" data-name="路径 556" d="M141.961,78.295c2.238-1.3,4.1-.487,4.459,1.774l12.789-7.388a10.081,10.081,0,0,1,4.4-6.721c2.5-1.437,4.514-.291,4.522,2.575a9.916,9.916,0,0,1-4.491,7.78,4.665,4.665,0,0,1-1.421.534l-4.711,8.22a3.565,3.565,0,0,1,.785,2.536,9.877,9.877,0,0,1-4.491,7.773c-2.489,1.437-4.514.291-4.522-2.567a9.924,9.924,0,0,1,4.491-7.788,3.745,3.745,0,0,1,2.426-.581l4.452-7.71a2.614,2.614,0,0,1-1.429-2.049l-12.86,7.427a10.034,10.034,0,0,1-4.373,6.516c-2.489,1.437-4.514.283-4.522-2.575A9.9,9.9,0,0,1,141.961,78.295Z" transform="translate(1348.168 13285.281)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_557" data-name="路径 557" d="M63.322,221.454l-2.112-1.225,3.25-5.629,2.112,1.225Z" transform="translate(1364.556 13253.209)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_558" data-name="路径 558" d="M67.015,215.338l-2.1-1.225A1.987,1.987,0,0,1,64,212.7l2.112,1.225A1.979,1.979,0,0,0,67,215.338" transform="translate(1363.957 13253.613)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_559" data-name="路径 559" d="M61.927,223.038h-.911l-.133.039h-.11l-.141.055-.149.063-.126.063-.2.1a5.308,5.308,0,0,0-.573.393l-.243.2a2.911,2.911,0,0,0-.283.259l-.181.181c-.055.071-.118.133-.181.2l-.133.157-.133.165-.22.3-.141.212-.047.071-.071.118-.1.165h0a1.572,1.572,0,0,0-.141.251c-.055.094-.1.188-.149.283l-.126.283-.071.173a.127.127,0,0,1-.055.126.11.11,0,0,1,0,.047l-.094.267a1.329,1.329,0,0,1-.1.33v.11a1.052,1.052,0,0,0-.039.149.652.652,0,0,1,0,.118.621.621,0,0,1-.055.314.976.976,0,0,0,0,.141.07.07,0,0,0,0,.039,1.789,1.789,0,0,0,0,.2.877.877,0,0,0,0,.149v.094a1.161,1.161,0,0,0,0,.165,2.308,2.308,0,0,0,.958,2.1l-2.245-1.1a2.3,2.3,0,0,1-.966-2.112h0v-.864a.394.394,0,0,1,.039-.2v-.118l.047-.181v-.078l.094-.338.118-.306.047-.126.071-.173h0a.451.451,0,0,1,.094-.2v-.055l.141-.283a3.147,3.147,0,0,1,.157-.275l.165-.283.188-.283.188-.259h0l.251-.291a2.23,2.23,0,0,1,.181-.2l.173-.181a5.059,5.059,0,0,1,.542-.471l.133-.1.141-.1.283-.181.283-.149.173-.071h0l.181-.071.149-.047h0l.29-.063h.934Z" transform="translate(1365.943 13251.623)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_560" data-name="路径 560" d="M71.671,205.462h0l-.149-.078h0l-.133-.047h-.079a.226.226,0,0,0-.078,0h-.063a.732.732,0,0,0-.188,0h-.463l-.2.039h-.149l-.33.118h0l-.181.086-.267.141-.3.181-.212.157-.181.141c-.141.118-.275.243-.408.377s-.243.243-.361.377l-.079.094-.11.133-.071.094-.11.141a1.908,1.908,0,0,0-.11.157l-.2.283c-.055.094-.118.188-.165.283h0l-.149.275h0c-.047.078-.086.165-.126.243h0a.11.11,0,0,0,0,.047l-.118.243-.118.29a1.247,1.247,0,0,1-.11.314c-.031.1-.071.22-.1.33s-.071.251-.094.377-.047.228-.063.338L64,209.387a2.663,2.663,0,0,1,.063-.345h0a1.158,1.158,0,0,1,.063-.275v-.086l.047-.149a.226.226,0,0,1,.055-.181c.055-.055,0-.063,0-.086l.047-.133v-.094a.729.729,0,0,1,.126-.291,1.154,1.154,0,0,1,.079-.173.737.737,0,0,1,.047-.118h0l.259-.3a3.126,3.126,0,0,1,.157-.275c.055-.1.11-.188.173-.283l.188-.283.126-.181.094-.118c.086-.11.173-.22.267-.322h0l.063-.071a2.836,2.836,0,0,1,.259-.275v-.039a5.5,5.5,0,0,1,1.1-.848l.236-.126.228-.1a.854.854,0,0,1,.181-.071h0l.149-.047h.1l.181-.039h.667l.181.047h.173l.173.078h0Z" transform="translate(1363.957 13255.47)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_561" data-name="路径 561" d="M54.222,217.456l-2.112-1.225,9.351-5.4,2.1,1.233Z" transform="translate(1366.512 13254.018)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_562" data-name="路径 562" d="M51.477,216.979l-.078-.039H50.331l-.29.063h0l-.118.039h-.055l-.165.063h0l-.1.047-.353.181a5.029,5.029,0,0,0-.589.2l-.165.126h-.039c-.133.11-.275.236-.4.361h0c-.118.118-.228.236-.338.361h0l-.243.29h0s-.149.2-.212.3l-.2.283-.173.283-.118.22a.2.2,0,0,0,0,.055.525.525,0,0,0-.047.094l-.094.188c-.047.094-.094.188-.133.283l-.118.3h0l-.055.141a.2.2,0,0,1-.047.157c-.047.047-.055.157-.079.235v.1a.134.134,0,0,0,0,.055.947.947,0,0,0,0,.141,1.22,1.22,0,0,0,0,.181l-.047.228v.966h0a2.308,2.308,0,0,0,.966,2.112l-2.387-1.178a2.355,2.355,0,0,1-.966-2.112h0v-.864l.047-.228a.258.258,0,0,1,.039-.165,2.105,2.105,0,0,1,.055-.212,1.109,1.109,0,0,1,.1-.338c.039-.11.071-.2.11-.306s.079-.2.126-.3l.126-.29h0l.039-.063c0-.071.063-.141.1-.212s.1-.188.157-.283l.165-.275h0V218.1l.157-.22c.071-.1.141-.2.22-.3h0l.133-.173.11-.126h0l.149-.165a1.967,1.967,0,0,1,.181-.181c.078-.086.165-.165.259-.251a5.494,5.494,0,0,1,.84-.6l.236-.126a1.452,1.452,0,0,1,.228-.1h.165l.149-.047a.254.254,0,0,1,.071,0h1.131a.786.786,0,0,1,.181.047h0l.141.047a.638.638,0,0,1,.165.078Z" transform="translate(1368.306 13252.948)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_563" data-name="路径 563" d="M49.735,215.021c1.641-.942,3-.353,3.258,1.3l9.343-5.4a7.309,7.309,0,0,1,3.219-4.907c1.821-1.052,3.3-.212,3.305,1.876a7.27,7.27,0,0,1-3.282,5.684,3.406,3.406,0,0,1-1.052.408l-3.47,6.006a2.6,2.6,0,0,1,.612,1.829,7.27,7.27,0,0,1-3.282,5.684c-1.821,1.052-3.3.2-3.305-1.884a7.247,7.247,0,0,1,3.282-5.684,2.8,2.8,0,0,1,1.767-.424l3.227-5.629a1.908,1.908,0,0,1-1.044-1.492l-9.421,5.417a7.349,7.349,0,0,1-3.2,4.781c-1.814,1.044-3.3.2-3.305-1.884A7.27,7.27,0,0,1,49.735,215.021Z" transform="translate(1367.741 13255.15)" fill="#d4e6fc" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_564" data-name="路径 564" d="M241.058,307.14l-45.536,23.553-10.992-6.045L236.347,304Z" transform="translate(1338.056 13233.994)" fill="#6660fd"/>\n' +
    '    <path id="路径_565" data-name="路径 565" d="M236.982,287.145,194.555,311.8,183.83,305.61l42.427-24.66Z" transform="translate(1338.206 13238.95)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_566" data-name="路径 566" d="M239.907,288.84l-.031,13.206-42.435,24.66.039-13.206Z" transform="translate(1335.282 13237.256)" fill="#fff" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '    <path id="路径_567" data-name="路径 567" d="M194.544,318.555,194.5,331.76l-10.725-6.195.039-13.206Z" transform="translate(1338.217 13232.2)" fill="#5f6ded" stroke="#1761e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>\n' +
    '  </g>\n' +
    '</svg>\n')

import type {TableColumnCtx} from 'element-plus'

interface User {
  date: string
  semester: number
  className: string
  grade: number
}

// const formatter = (row: User, column: TableColumnCtx<User>) => {
//   return row.address
// }
</script>

<template>
  <IonPage>
    <IonHeader collapse="fade" style="" class="ion-no-border ion-padding">
      <IonToolbar style="--color: white;--background: none" class="">
        <ion-buttons slot="start">
          <ion-back-button style="color: #FFFFFF" text="" default-href="/user/grade/"></ion-back-button>
        </ion-buttons>
        <IonTitle>成绩查询</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <ion-icon style="display: block;margin: auto;width: 200px;height: 40px;" :icon="mainIcon"></ion-icon>
      <div style="display:flex;" class="ion-padding">
        <ion-button
            style="width: 30%;--background: #6761FD;--color: white;font-size: 13px;min-height: 42px;height: 42px;margin-top: 8px"
            @click="smartAnalysis">
          智能分析&nbsp;<ion-icon :icon="searchOutline"></ion-icon>
        </ion-button>
        <ion-searchbar class="search" :mode="'md'"
                       style="--box-shadow: none;--border-radius: 10px;font-size: 13px !important;width: 70%;"
                       placeholder="请输入"></ion-searchbar>
      </div>
      <div>
        <el-table :data="tableList " :default-sort="{ prop: 'date', order: 'descending' }"
                  style="width: 100%;font-size: 12px" border>
          <el-table-column prop="year" label="学年" sortable align="center"/>
          <el-table-column prop="semester" label="学期" width="70" align="center"/>
          <el-table-column prop="classname" label="课程名称" min-width="126" align="center"/>
          <el-table-column prop="grades" label="成绩" sortable align="center"/>
        </el-table>
      </div>
    </ion-content>
    <div ref="popover">
      <ion-popover style="--width: 312px" @ionPopoverDidDismiss="popoverFlag=false" :is-open="popoverFlag"
                   reference="event">
        <div style="background: #FFFFFF;overflow: hidden;width: 100%;position: relative">
          <ion-icon :icon="AIIcon"
                    style="width: 250px;height: 217px;position: absolute;top: -50px;left: -10px"></ion-icon>
          <ion-icon :icon="viceIcon"
                    style="width: 60px;height: 60px;position: absolute;bottom: 20px;right: 10px"></ion-icon>
          <ion-text
              style="font-size: 22px;font-weight: 900;color: #6761FD;text-align: center;width: 100%;display: block;margin: 16px 0">
            智能分析
          </ion-text>
          <ion-text
              style="font-size: 13px;font-weight: 900;color: #808080;text-align: center;width: 100%;display: block;padding: 0 26px 40px 26px">
            <!--            你是一个在读书方面非常认真努力的学生。积极参与课堂讨论，勤奋完成作业，积极参加课外阅读和研究项目。追求分数的同时，更注重深入理解知识。这一学期，你展示出极高的学习动力和自律能力，不断克服困难和挑战。对知识的渴望和追求使得你在读书上取得了显著的成就。通过努力，你已经为自己的未来做好了充分的准备。-->
            {{ smart }}
          </ion-text>
        </div>
        <div style="width: 100%;background: #6761FD">
          <ion-avatar style="width:41px;height: 41px;margin: 10px;display: inline-block"><img
              :src="avatar"></ion-avatar>
          <div style="display:inline-block;vertical-align: top;margin-top: 14px">
            <ion-text
                style="display: block;color: #FFFFFF;font-size: 15px;font-weight: 600;">{{ studentname }}
            </ion-text>
            <ion-text
                style="display: block;color: #FFFFFF;font-size: 10px;font-weight: 500;">{{ username }}
            </ion-text>
          </div>
        </div>
      </ion-popover>
    </div>
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