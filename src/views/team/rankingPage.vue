<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToggle,
  IonCardContent,
  IonCard,
  IonChip,
  IonRange,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonList,
  IonNote,
  IonAvatar,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonToolbar,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  onIonViewDidEnter,
  onIonViewWillEnter,
  IonThumbnail,
  IonTitle
} from "@ionic/vue";
import {ellipsisHorizontalOutline, chevronForwardOutline, star, starOutline} from "ionicons/icons";
import {onMounted, ref} from "vue";

const content = ref();
const toggle = ref();
const toggleValue = ref(false);
const scrollEvents = ref(true);
const segmentValue = ref('daily');
const circle = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">\n' +
    '  <g id="组_702" data-name="组 702" transform="translate(0 -19)" opacity="0.36">\n' +
    '    <circle id="椭圆_33" data-name="椭圆 33" cx="40.5" cy="40.5" r="40.5" transform="translate(0 19)" fill="#5676f1" opacity="0.22"/>\n' +
    '    <circle id="椭圆_32" data-name="椭圆 32" cx="18.5" cy="18.5" r="18.5" transform="translate(22 41)" fill="#5676f1"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const arrows = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="38.757" height="38.762" viewBox="0 0 38.757 38.762">\n' +
    '  <path id="Vector" d="M15.268,10.239a2.5,2.5,0,0,1,1.764,4.26L3.312,28.219a5.116,5.116,0,0,0,7.236,7.236l13.718-13.72a2.5,2.5,0,0,1,4.26,1.764V38.762A10.233,10.233,0,0,0,38.757,28.527V10.235A10.234,10.234,0,0,0,28.525,0H10.235A10.235,10.235,0,0,0,0,10.235l0,0Z" transform="translate(38.757 38.762) rotate(180)" fill="#fff" opacity="0.47" style="isolation: isolate"/>\n' +
    '</svg>\n')
const third = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.047" height="36.598" viewBox="0 0 27.047 36.598">\n' +
    '  <defs>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <rect id="_2" data-name="2" width="27.047" height="36.598" fill="none" style="isolation: isolate"/>\n' +
    '    </clipPath>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#e39a33"/>\n' +
    '      <stop offset="1" stop-color="#e7ac60"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-3" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#e7a44b"/>\n' +
    '      <stop offset="0.564" stop-color="#ebb370"/>\n' +
    '      <stop offset="1" stop-color="#f0b265"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc"/>\n' +
    '      <stop offset="1" stop-color="#b4b5cc" stop-opacity="0"/>\n' +
    '    </linearGradient>\n' +
    '    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0.9" stop-color="#f0b162"/>\n' +
    '      <stop offset="1" stop-color="#c38829"/>\n' +
    '    </radialGradient>\n' +
    '    <linearGradient id="linear-gradient-5" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#eec08c"/>\n' +
    '      <stop offset="1" stop-color="#ebb36e"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-6" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc" stop-opacity="0"/>\n' +
    '      <stop offset="1" stop-color="#fffdfc"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <g id="_2-2" data-name="2" clip-path="url(#clip-path)" style="isolation: isolate">\n' +
    '    <rect id="_2-3" data-name="2" width="27.047" height="36.598" fill="none" style="isolation: isolate"/>\n' +
    '    <g id="_3-2" data-name="3" transform="translate(0 0.401)" opacity="0.68" clip-path="url(#clip-path)" style="isolation: isolate">\n' +
    '      <rect id="_3-3" data-name="3" width="27.047" height="36.598" fill="none" style="isolation: isolate"/>\n' +
    '      <g id="Group" transform="translate(0)" style="isolation: isolate">\n' +
    '        <path id="Vector" d="M.908,0A.908.908,0,0,0,0,.908V4.057H9.8V.908A.908.908,0,0,0,8.9,0ZM.93,3.55V1.513A.667.667,0,0,1,1.6.845h6.61a.667.667,0,0,1,.667.667V3.55Z" transform="translate(8.621 7.1)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '        <path id="Vector-2" data-name="Vector" d="M13.524,27.047A13.524,13.524,0,1,1,27.047,13.524,13.524,13.524,0,0,1,13.524,27.047Z" transform="translate(0 9.551)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '        <path id="Vector-3" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 10.058)" fill="url(#linear-gradient-3)" style="isolation: isolate"/>\n' +
    '        <path id="Vector-4" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 10.058)" fill="url(#linear-gradient-4)" style="isolation: isolate"/>\n' +
    '        <path id="Vector-5" data-name="Vector" d="M9.213,18.426a9.213,9.213,0,1,1,9.213-9.213A9.213,9.213,0,0,1,9.213,18.426Z" transform="translate(4.311 13.862)" fill="url(#radial-gradient)" style="isolation: isolate"/>\n' +
    '        <path id="Vector-6" data-name="Vector" d="M7.861,15.721a7.861,7.861,0,1,1,7.861-7.861A7.861,7.861,0,0,1,7.861,15.721Z" transform="translate(5.663 15.214)" fill="url(#linear-gradient-5)" style="isolation: isolate"/>\n' +
    '        <g id="Group-2" data-name="Group" transform="translate(10.734)" style="isolation: isolate">\n' +
    '          <path id="Vector-7" data-name="Vector" d="M5.578,0V7.945H0V0Z" fill="#f8f3ea" style="isolation: isolate"/>\n' +
    '          <path id="Vector-8" data-name="Vector" d="M1.86,0V7.945H0V0Z" fill="#f82c23" style="isolation: isolate"/>\n' +
    '          <path id="Vector-9" data-name="Vector" d="M1.86,0V7.945H0V0Z" transform="translate(3.719)" fill="#2671f7" style="isolation: isolate"/>\n' +
    '        </g>\n' +
    '        <g id="Group-3" data-name="Group" transform="translate(10.448 18.595)" style="isolation: isolate">\n' +
    '          <path id="Vector-10" data-name="Vector" d="M.952,6.452a2.634,2.634,0,0,0,1.8.835c.8,0,1.323-.336,1.323-.986,0-.743-.394-1.184-2.2-1.184V3.668c1.474,0,1.938-.453,1.938-1.138,0-.592-.348-.917-.987-.917a2.3,2.3,0,0,0-1.543.719L.232,1.068A4.058,4.058,0,0,1,2.913,0C4.7,0,5.872.835,5.872,2.379a1.979,1.979,0,0,1-1.393,1.9V4.34a2.133,2.133,0,0,1,1.672,2.1c0,1.613-1.474,2.518-3.192,2.518A3.706,3.706,0,0,1,0,7.753Z" fill="#bc853b" style="isolation: isolate"/>\n' +
    '        </g>\n' +
    '        <path id="Vector-11" data-name="Vector" d="M15.384,10.143a7.861,7.861,0,1,0-15.046,0,7.862,7.862,0,0,1,15.046,0Z" transform="translate(5.663 15.214)" fill="url(#linear-gradient-6)" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const second = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.047" height="36.598" viewBox="0 0 27.047 36.598">\n' +
    '  <defs>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <rect id="_2" data-name="2" width="27.047" height="36.598" fill="none" style="isolation: isolate"/>\n' +
    '    </clipPath>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#818096"/>\n' +
    '      <stop offset="1" stop-color="#8999ba"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-3" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#8c8baa"/>\n' +
    '      <stop offset="0.564" stop-color="#c8c8d9"/>\n' +
    '      <stop offset="1" stop-color="#a9a8c8"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc"/>\n' +
    '      <stop offset="1" stop-color="#b4b5cc" stop-opacity="0"/>\n' +
    '    </linearGradient>\n' +
    '    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0.9" stop-color="#ceced9"/>\n' +
    '      <stop offset="1" stop-color="#9b9eb3"/>\n' +
    '    </radialGradient>\n' +
    '    <linearGradient id="linear-gradient-5" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#bdbcd2"/>\n' +
    '      <stop offset="1" stop-color="#c8c8d9"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-6" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc" stop-opacity="0"/>\n' +
    '      <stop offset="1" stop-color="#fffdfc"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <g id="_2-2" data-name="2" opacity="0.68" clip-path="url(#clip-path)" style="isolation: isolate">\n' +
    '    <rect id="_2-3" data-name="2" width="27.047" height="36.598" fill="none" style="isolation: isolate"/>\n' +
    '    <g id="Group" transform="translate(0)" style="isolation: isolate">\n' +
    '      <path id="Vector" d="M.908,0A.908.908,0,0,0,0,.908V4.057H9.8V.908A.908.908,0,0,0,8.9,0ZM.93,3.55V1.513A.667.667,0,0,1,1.6.845h6.61a.667.667,0,0,1,.667.667V3.55Z" transform="translate(8.621 7.1)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-2" data-name="Vector" d="M13.524,27.047A13.524,13.524,0,1,1,27.047,13.524,13.524,13.524,0,0,1,13.524,27.047Z" transform="translate(0 9.551)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-3" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 10.058)" fill="url(#linear-gradient-3)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-4" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 10.058)" fill="url(#linear-gradient-4)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-5" data-name="Vector" d="M9.213,18.426a9.213,9.213,0,1,1,9.213-9.213A9.213,9.213,0,0,1,9.213,18.426Z" transform="translate(4.311 13.862)" fill="url(#radial-gradient)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-6" data-name="Vector" d="M7.861,15.721a7.861,7.861,0,1,1,7.861-7.861A7.861,7.861,0,0,1,7.861,15.721Z" transform="translate(5.663 15.214)" fill="url(#linear-gradient-5)" style="isolation: isolate"/>\n' +
    '      <g id="Group-2" data-name="Group" transform="translate(10.734)" style="isolation: isolate">\n' +
    '        <path id="Vector-7" data-name="Vector" d="M5.578,0V7.945H0V0Z" fill="#f8f3ea" style="isolation: isolate"/>\n' +
    '        <path id="Vector-8" data-name="Vector" d="M1.86,0V7.945H0V0Z" fill="#f82c23" style="isolation: isolate"/>\n' +
    '        <path id="Vector-9" data-name="Vector" d="M1.86,0V7.945H0V0Z" transform="translate(3.719)" fill="#2671f7" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '      <g id="Group-3" data-name="Group" transform="translate(10.421 18.595)" style="isolation: isolate">\n' +
    '        <path id="Vector-10" data-name="Vector" d="M3.782,2.884A1.1,1.1,0,0,0,2.636,1.643a2.113,2.113,0,0,0-1.489.851L0,1.359A3.679,3.679,0,0,1,2.92,0,2.675,2.675,0,0,1,5.8,2.766c0,1.513-1.3,3.179-2.648,4.539a12.375,12.375,0,0,1,1.43-.118h1.62V8.959H.107V7.754C2.3,5.757,3.782,4.161,3.782,2.884Z" fill="#9495ad" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '      <path id="Vector-11" data-name="Vector" d="M15.384,10.143a7.861,7.861,0,1,0-15.046,0,7.862,7.862,0,0,1,15.046,0Z" transform="translate(5.663 15.214)" fill="url(#linear-gradient-6)" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const champion = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.047" height="36.598" viewBox="0 0 27.047 36.598">\n' +
    '  <defs>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <rect id="_1" data-name="1" width="27.047" height="36.598" transform="translate(0 0)" fill="none" style="isolation: isolate"/>\n' +
    '    </clipPath>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#b6660c"/>\n' +
    '      <stop offset="1" stop-color="#f1a52d"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-3" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fda400"/>\n' +
    '      <stop offset="0.564" stop-color="#ffc000"/>\n' +
    '      <stop offset="1" stop-color="#fdaf00"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-4" x1="0.165" y1="0.133" x2="0.839" y2="0.872" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc"/>\n' +
    '      <stop offset="1" stop-color="#fdaf00" stop-opacity="0"/>\n' +
    '    </linearGradient>\n' +
    '    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0.908" stop-color="#f3c635"/>\n' +
    '      <stop offset="1" stop-color="#faae00"/>\n' +
    '    </radialGradient>\n' +
    '    <linearGradient id="linear-gradient-5" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fff500"/>\n' +
    '      <stop offset="1" stop-color="#ffd400"/>\n' +
    '    </linearGradient>\n' +
    '    <linearGradient id="linear-gradient-6" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fffdfc" stop-opacity="0"/>\n' +
    '      <stop offset="1" stop-color="#fffdfc"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <g id="_1-2" data-name="1" transform="translate(0 0)" opacity="0.68" clip-path="url(#clip-path)" style="isolation: isolate">\n' +
    '    <rect id="_1-3" data-name="1" width="27.047" height="36.598" transform="translate(0 0)" fill="none" style="isolation: isolate"/>\n' +
    '    <path id="Vector" d="M.908,0A.908.908,0,0,0,0,.908V4.057H9.8V.908A.908.908,0,0,0,8.9,0ZM.93,3.55V1.513A.667.667,0,0,1,1.6.845h6.61a.667.667,0,0,1,.667.667V3.55Z" transform="translate(8.621 7.1)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '    <g id="Group" transform="translate(0 9.551)" style="isolation: isolate">\n' +
    '      <path id="Vector-2" data-name="Vector" d="M13.524,27.047A13.524,13.524,0,1,1,27.047,13.524,13.524,13.524,0,0,1,13.524,27.047Z" transform="translate(0 0)" fill="url(#linear-gradient)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-3" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 0.507)" fill="url(#linear-gradient-3)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-4" data-name="Vector" d="M13.017,26.033A13.017,13.017,0,1,1,26.033,13.017,13.017,13.017,0,0,1,13.017,26.033Z" transform="translate(0.507 0.507)" fill="url(#linear-gradient-4)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-5" data-name="Vector" d="M9.213,18.426a9.213,9.213,0,1,1,9.213-9.213A9.213,9.213,0,0,1,9.213,18.426Z" transform="translate(4.311 4.311)" fill="url(#radial-gradient)" style="isolation: isolate"/>\n' +
    '      <path id="Vector-6" data-name="Vector" d="M7.861,15.721a7.861,7.861,0,1,1,7.861-7.861A7.861,7.861,0,0,1,7.861,15.721Z" transform="translate(5.663 5.663)" fill="url(#linear-gradient-5)" style="isolation: isolate"/>\n' +
    '      <g id="Group-2" data-name="Group" transform="translate(10.694 9.044)" style="isolation: isolate">\n' +
    '        <path id="Vector-7" data-name="Vector" d="M1.9,7.225V2.131H.253V.807A6.038,6.038,0,0,0,2.469,0H4.046V7.225H5.66V8.959H0V7.225Z" fill="#e5920e" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '      <path id="Vector-8" data-name="Vector" d="M15.384,10.143a7.861,7.861,0,1,0-15.046,0,7.862,7.862,0,0,1,15.046,0Z" transform="translate(5.663 5.663)" fill="url(#linear-gradient-6)" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '    <g id="Group-3" data-name="Group" transform="translate(10.734 0)" style="isolation: isolate">\n' +
    '      <path id="Vector-9" data-name="Vector" d="M5.578,0V7.945H0V0Z" fill="#f8f3ea" style="isolation: isolate"/>\n' +
    '      <path id="Vector-10" data-name="Vector" d="M1.86,0V7.945H0V0Z" fill="#f82c23" style="isolation: isolate"/>\n' +
    '      <path id="Vector-11" data-name="Vector" d="M1.86,0V7.945H0V0Z" transform="translate(3.719)" fill="#2671f7" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')

onMounted(() => {
  setTimeout(() => {
    let toggleIcon = toggle.value.$el.shadowRoot.querySelectorAll('ion-icon')
    toggleIcon[0].style.transform = 'none'
    toggleIcon[0].style.top = '3px'
    toggleIcon[0].style.width = '24px'
    toggleIcon[0].style.height = '16px'
    toggleIcon[0].shadowRoot.innerHTML = '<div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">\n' +
        '  <text id="团队" transform="translate(0 13)" fill="#fff" font-size="11" font-family="SourceHanSansCN-Medium, Source Han Sans CN" font-weight="500" letter-spacing="0.1em"><tspan x="0" y="0">团队</tspan></text>\n' +
        '</svg>\n</div>'
    toggleIcon[1].style.transform = 'none'
    toggleIcon[1].style.top = '3px'
    toggleIcon[1].style.width = '24px'
    toggleIcon[1].style.height = '16px'
    toggleIcon[1].shadowRoot.innerHTML = '<div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">\n' +
        '  <text id="全部" transform="translate(0 13)" fill="#595959" font-size="11" font-family="SourceHanSansCN-Medium, Source Han Sans CN" font-weight="500" letter-spacing="0.1em"><tspan x="0" y="0">全部</tspan></text>\n' +
        '</svg></div>'
  }, 100)

})


function change(event: any) {
  segmentValue.value = event.detail.value;
}
</script>

<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/study/lessons"></ion-back-button>
        </ion-buttons>
        <ion-title style="--color:white ">排行榜</ion-title>
        <ion-buttons slot="end">
          <ion-button color="light">
            <ion-icon :icon="ellipsisHorizontalOutline"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="main" style="z-index: -2;" :scroll-y="false" :scroll-events="scrollEvents" ref="content"
                 :fullscreen="true">
      <div slot="fixed" style="top: -15px;right: 20px;z-index:99999999">
        <ion-toggle v-model="toggleValue" ref="toggle" :enable-on-off-labels="true"></ion-toggle>
      </div>
      <div style="width: 100%;height:5%">
      </div>
      <ion-card v-if="!toggleValue" style="margin: 0;height: 95%;--background: #fff">
        <ion-card-content style="height: 100%;">
          <ion-segment mode="md" :value="segmentValue" @ionChange="change"
                       style="width: 100%;padding-bottom: 10px;height: 8%">
            <ion-segment-button value="daily">
              <ion-label><h3 style="font-weight: 900">今日榜</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="weekly">
              <ion-label><h3 style="font-weight: 900">周榜</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="monthly">
              <ion-label><h3 style="font-weight: 900">月榜</h3></ion-label>
            </ion-segment-button>
          </ion-segment>
          <ion-content class="second" :scroll-y="true" style="height: 92%">
            <ion-card v-for="i in 10"
                      :style="i==1?`margin: 12px 0 ;box-shadow: none;--background: linear-gradient(to bottom,#FFE066, #FDF4DE, #F9F9F9)`:i==2?`margin: 12px 0 ;box-shadow: none;--background: linear-gradient(to bottom,#C5D9E9, #F9F9F9, #F9F9F9)`:i==3?`margin: 12px 0 ;box-shadow: none;--background: linear-gradient(to bottom,#F1DAB7, #F4F1EA, #F9F9F9)`:`margin: 12px 0 ;box-shadow: none;--background: rgba(119,119,119,0.05)`">
              <ion-card-content style="padding: 0 4px 4px 4px">
                <div style="height: 40px;width: 100%;position: relative">
                  <ion-icon v-if="i<=3" :icon="i==1?champion:i==2?second:third"
                            style="height: 36px;width: 27px;position:absolute;top: 0;left: 16px"></ion-icon>
                  <ion-text v-if="i>3"
                            style="position:absolute;top: 14px;left: 10px;font-weight: 800">TOP.{{ i }}
                  </ion-text>
                  <ion-text
                      style="color: #4B4B4B;font-size: 14px;position: absolute;top: 16px;left: 64px;font-weight: 600">
                    【运动打卡】云端之上
                  </ion-text>
                  <ion-icon :icon="arrows"
                            style="height: 36px;width: 36px;position:absolute;top: 0;right: 0;"></ion-icon>
                </div>
                <ion-card
                    style="margin: 0 ;--background: #ffffff;box-shadow: none">
                  <ion-card-content style="padding: 10px">
                    <ion-chip
                        style="position: absolute;top: -4px;right: -4px;font-size: 13px;margin: 0;border-radius: 6px;padding-top: 10px;padding-right: 14px;--color: #fff;"
                        :style="i==1?`--background: #EBB259;`:i==2?`--background: #B4B5C5;`:i==3?`--background: #CFAA78;`:`--background: #FFC8AE;`"
                        mode="md">队伍
                    </ion-chip>
                    <div>
                      <div style="display: flex;">
                        <ion-thumbnail style="--border-radius: 8px;--size: 66px"><img
                            src="https://www.0030.store/test.jpg"
                            alt=""/></ion-thumbnail>
                        <div style="margin-left: 10px">
                          <ion-text style="display: block;color: black;font-weight: bold;margin-top: 13px">【备战英语】我们不简单队<br>（组队背单词）
                          </ion-text>
                        </div>
                      </div>
                    </div>
                    <ion-icon :icon="circle"
                              style="position: absolute;bottom: -30px;right: -20px;font-size: 81px"></ion-icon>
                  </ion-card-content>
                </ion-card>
              </ion-card-content>
            </ion-card>
          </ion-content>
        </ion-card-content>
      </ion-card>
      <ion-content class="team" :scroll-y="true" style="height: 95%" v-if="toggleValue">

        <div>
          <div
              style="display: inline-block;margin-left: 20px;width: 6px;height: 23px;background-color: #5DA2FF;vertical-align: bottom;border-radius: 3px"></div>
          <ion-text
              style="font-weight: 900;color:#474747;display: inline-block;width: 80%;vertical-align: bottom;margin-left: 6px">
            今日参与度
          </ion-text>
          <ion-card
              class="teamCard">
            <div
                style="width: 11px;height: 11px;background: rgba(255,255,255,0.57);border-radius: 100%;position: absolute;top: 22px;left: 48px"></div>
            <div
                style="width: 11px;height: 11px;background: rgba(255,255,255,0.57);border-radius: 100%;position: absolute;top: 22px;right: 48px"></div>
            <ion-card-title style="text-align: center;font-size: 16px;margin-top: 18px">参与度统计数据</ion-card-title>
            <ion-card-content>
              <ion-accordion-group>
                <ion-accordion v-for="i in 2" :value="i+''" style="border-radius: 6px;margin: 6px 0">
                  <ion-item lines="none"
                            style="width: 100%;--background: white;position: relative;" slot="header">
                    <ion-thumbnail style="--border-radius: 8px;--size: 48px;display: inline-block;margin-right: 0;"
                                   slot="start"><img
                        src="https://www.0030.store/test.jpg"
                        alt=""/></ion-thumbnail>
                    <div style="display: inline-block;vertical-align: top;width: 100%;margin-left: 10px">
                      <ion-text
                          style="font-size: 12px;color: #484848;font-weight: 600;vertical-align: baseline;margin-top: 10px;display: block;">
                        【备战英语】我们不简单队
                      </ion-text>
                      <ion-range :value="50" disabled :pin="true" :pin-formatter="(value:number)=>`${value}%`"
                                 style="padding: 5px 0 12px 0;"></ion-range>
                    </div>
                    <!--                <ion-icon style="position: absolute;top: 16px;right: 16px;transition: all 500ms;" @click="(event)=>{if(event.srcElement.style.transform=='rotate(90deg)'){ event.srcElement.style.transform='';console.log(event.srcElement.style.transform)}if(event.srcElement.style.transform=='') {event.srcElement.style.transform='rotate(90deg)';console.log(event.srcElement.style.transform)}}" :icon="chevronForwardOutline"></ion-icon>-->
                  </ion-item>
                  <div class="ion-padding" slot="content">First Content</div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-card-content>
          </ion-card>
        </div>
        <div>
          <div
              style="display: inline-block;margin-left: 20px;width: 6px;height: 23px;background-color: #5DA2FF;vertical-align: bottom;border-radius: 3px"></div>
          <ion-text
              style="font-weight: 900;color:#474747;display: inline-block;width: 80%;vertical-align: bottom;margin-left: 6px">
            今日活跃度
          </ion-text>
          <ion-card
              class="teamCard">
            <div
                style="width: 11px;height: 11px;background: rgba(255,255,255,0.57);border-radius: 100%;position: absolute;top: 22px;left: 48px"></div>
            <div
                style="width: 11px;height: 11px;background: rgba(255,255,255,0.57);border-radius: 100%;position: absolute;top: 22px;right: 48px"></div>
            <ion-card-title style="text-align: center;font-size: 16px;margin-top: 18px;">活跃度统计数据
            </ion-card-title>
            <ion-card-content>
              <ion-accordion-group>
                <ion-accordion v-for="i in 3" :value="i+''"
                               style="border-radius: 6px;margin: 6px 0;background-color: #FFFFFF">
                  <ion-item lines="none"
                            style="width: 100%;--background: white;position: relative;" slot="header">
                    <div style="border-radius: 8px;width: 48px;height: 48px;margin-right: 0;background-color: #F7F8F9"
                         slot="start">
                      <ion-text style="display:block;color: #B4B4B4;font-size: 12px;text-align: center;padding: 2px 0">
                        活跃度
                      </ion-text>
                      <ion-text
                          style="display:block;color: #FFA35C;font-size: 20px;text-align: center;font-weight: 900">60
                      </ion-text>
                    </div>
                    <div style="display: inline-block;vertical-align: top;width: 100%;margin-left: 10px">
                      <div
                          style="font-size: 8px;color: #FFFFFF;vertical-align: baseline;margin-top: 10px;display: block;width: 30px;text-align: center;border-radius: 2px;padding: 3px 2px"
                          :style="i==1?'background: linear-gradient(to bottom,#E59950,#FFC185);':i==2?'background: linear-gradient(to bottom,#A1AAC3,#D9E4FF);':'background: linear-gradient(to bottom,#CEA880,#FDDAB8);'">
                        TOP.{{ i }}
                      </div>
                      <ion-text style="padding: 5px 0 12px 0;color:#353535;font-weight: 600;display: block;">
                        爱学习的小鱼
                      </ion-text>
                    </div>
                    <!--                <ion-icon style="position: absolute;top: 16px;right: 16px;transition: all 500ms;" @click="(event)=>{if(event.srcElement.style.transform=='rotate(90deg)'){ event.srcElement.style.transform='';console.log(event.srcElement.style.transform)}if(event.srcElement.style.transform=='') {event.srcElement.style.transform='rotate(90deg)';console.log(event.srcElement.style.transform)}}" :icon="chevronForwardOutline"></ion-icon>-->
                  </ion-item>
                  <div slot="content" class="ion-padding">
                    <div
                        style="background-color: #F7F8F9;width: 100%;display: flex;justify-content: space-around;border-radius: 10px">
                      <div>
                        <ion-text
                            style="font-size: 12px;color: #B4B4B4;display: block;padding: 10px 0 6px 0;text-align: center">
                          学习次数
                        </ion-text>
                        <ion-text
                            style="font-size: 20px;color: #484848;display: block;text-align: center;font-weight: 900">
                          5
                        </ion-text>
                      </div>
                      <div>
                        <ion-text
                            style="font-size: 12px;color: #B4B4B4;display: block;padding: 10px 0 6px 0;text-align: center">
                          观看时长
                        </ion-text>
                        <ion-text
                            style="font-size: 20px;color: #484848;display: inline-block;text-align: center;font-weight: 900">
                          2
                        </ion-text>
                        <ion-text style="font-size: 12px;color: #484848;text-align: center;">小时</ion-text>
                      </div>
                      <div>
                        <ion-text
                            style="font-size: 12px;color: #B4B4B4;display: block;padding: 10px 0 6px 0;text-align: center">
                          活跃度
                        </ion-text>
                        <ion-text
                            style="font-size: 20px;color: #484848;display: block;text-align: center;font-weight: 900">
                          60
                        </ion-text>
                      </div>
                    </div>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content.main::part(background) {
  background: url("@/img/background2.png") no-repeat;
  background-size: cover;
  z-index: -2;
}

ion-content.second::part(background) {
  background: #FFFFFF;
}

ion-content.team::part(background) {
  background: transparent;
}

.teamCard {
  --background: url('@/img/card.png') no-repeat;
  background-size: cover;
  box-shadow: none;
  margin: 16px;
  position: relative;
}

ion-toolbar {
  --background: transparent;
}

ion-toggle {
  padding: 12px;
  --track-background: #FFFFFF;
  --track-background-checked: #90BEE2;
  --handle-background: #90BEE2;
  --handle-background-checked: #FFFFFF;
  --handle-width: 14px;
  --handle-height: 14px;
  --handle-max-height: auto;
  --handle-spacing: 6px;
  --handle-border-radius: 100%;
  --handle-box-shadow: none;
}

ion-toggle::part(track) {
  height: 22px;
  width: 60px;

  /* Required for iOS handle to overflow the height of the track */
  overflow: visible;
}

.range-disabled {
  opacity: 1 !important;
}

ion-range {
  --bar-background: #F1F1F1;
  --bar-background-active: #56AAFF;
  --bar-height: 15px;
  --height: 30px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
  overflow: hidden;
}

ion-range::part(tick) {
  background: #a2d2ff;
}


ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  transform: scale(1.01);
  top: -13px;
  left: -38px;
  min-width: 28px;
  height: 28px;
  transition: transform 120ms ease, background 120ms ease;
}

ion-range::part(pin)::before {
  content: none;
}
</style>