
$(document).ready(function () {
    let isLoaded = false;
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (event) => {
        cursor.style.top = event.pageY + "px";
        cursor.style.left = event.pageX + "px";
    });





    const loop = () => {
        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let aboutOffset = scrollTop - document.querySelector(".about").offsetTop;
        let dementiaOffset = scrollTop - document.querySelector(".dementia-slide").offsetTop;
        let sdmOffset = scrollTop - document.querySelector(".sdm-slide").offsetTop;
        const main = document.querySelector(".main");

        const tab = document.querySelector(".tab-menu");
        const title = document.querySelectorAll('.main-text');
        const about = document.querySelector('.about-text');
        const aboutDesc = document.querySelectorAll('.desc-text');
        const viewHeight = window.innerHeight;
        const aboutDescBox1 = document.querySelector('.desc-box1');
        const aboutDescBox2 = document.querySelector('.desc-box2');
        const dementiaImage = document.querySelector('.dementia-slide-image');
        const sdmImage = document.querySelector('.sdm-slide-image');
        const newsMediaText = document.querySelector('.newsMedia-text');
        const publicationText = document.querySelector('.publication-text');
        const partners = document.querySelectorAll('.partners-item');
        const shine = document.querySelector('.shine2');

        if (isLoaded === true && thumnail.style.display !== 'none') {
            console.log('됨');
            thumnail.style.display = 'none';
        }

        if (document.body.clientWidth > 1400) {
            tab.style.display = 'flex';
            about.style.fontSize = '3rem';
            title.forEach((item, index) => {
                item.style.display = 'flex';
                item.style.fontSize = '4rem';
            });
            aboutDesc.forEach((item, index) => {
                item.style.fontSize = '1.5rem';
            });
            dementiaImage.style.right = ((dementiaOffset + 900) / 100) * 10 > 40 ? '40%' : (dementiaOffset + 900) / 100 * 10 + '%';
            sdmImage.style.left = ((sdmOffset + 900) / 100) * 10 > 40 ? '40%' : (sdmOffset + 900) / 100 * 10 + '%';
            newsMediaText.innerText = `News\n&\nMedia`
            publicationText.style.fontSize = '3rem';
            aboutDescBox1.style.left = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
            aboutDescBox2.style.right = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
        }
        else if (document.body.clientWidth > 1023) {
            tab.style.display = 'none';
            about.style.fontSize = '3rem';
            title.forEach((item, index) => {
                item.style.display = 'flex';
            });
            aboutDesc.forEach((item, index) => {
                item.style.fontSize = '1.5rem';
            });
            dementiaImage.style.right = ((dementiaOffset + 900) / 100) * 10 > 40 ? '40%' : (dementiaOffset + 900) / 100 * 10 + '%';
            sdmImage.style.left = ((sdmOffset + 900) / 100) * 10 > 40 ? '40%' : (sdmOffset + 900) / 100 * 10 + '%';
            newsMediaText.innerText = `News\n&\nMedia`
            publicationText.style.fontSize = '3rem';
            aboutDescBox1.style.left = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
            aboutDescBox2.style.right = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
        } else if (document.body.clientWidth > 767) {
            tab.style.display = 'none';
            title.forEach((item, index) => {
                item.style.display = 'flex';
                item.style.fontSize = '4rem'
            });
            about.style.fontSize = '4rem';
            aboutDesc.forEach((item, index) => {
                item.style.fontSize = '1.5rem';
            });
            dementiaImage.style.right = ((dementiaOffset + 800) / 100) * 10 > 45 ? '45%' : (dementiaOffset + 800) / 100 * 10 + '%';
            sdmImage.style.left = ((sdmOffset + 800) / 100) * 10 > 50 ? '50%' : (sdmOffset + 800) / 100 * 10 + '%';
            newsMediaText.innerText = 'News & Media';
            publicationText.style.fontSize = '2.5rem';
            aboutDescBox1.style.left = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
            aboutDescBox2.style.right = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
        } else if (document.body.clientWidth > 285) {
            tab.style.display = 'none';
            title.forEach((item, index) => {
                item.style.display = 'flex';
                item.style.fontSize = '3rem'
            });
            about.style.fontSize = '2rem';
            aboutDesc.forEach((item, index) => {
                item.style.fontSize = '0.7rem';
            });
            dementiaImage.style.right = ((dementiaOffset + 700) / 100) * 10 > 90 ? '90%' : (dementiaOffset + 800) / 100 * 10 + '%';
            sdmImage.style.left = ((sdmOffset + 700) / 100) * 10 > 90 ? '90%' : (sdmOffset + 800) / 100 * 10 + '%';
            newsMediaText.innerText = 'News & Media';
            publicationText.style.fontSize = '0.7rem';
            aboutDescBox1.style.left = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
            aboutDescBox2.style.right = aboutOffset + 500 < 0 ? '5%' : ((aboutOffset + 500) / 100) * 3 > 15 ? '15%' : ((aboutOffset + 500) / 100) * 3 + '%';
        } else {
            tab.style.display = 'none';
            title.forEach((item, index) => {
                item.style.display = 'flex';
                item.style.fontSize = '2rem'
            });
            about.style.fontSize = '2rem';
            aboutDesc.forEach((item, index) => {
                item.style.fontSize = '0.7rem';
            });
            dementiaImage.style.right = ((dementiaOffset + 800) / 100) * 10 > 90 ? '90%' : (dementiaOffset + 800) / 100 * 10 + '%';
            sdmImage.style.left = ((sdmOffset + 900) / 100) * 10 > 90 ? '90%' : (sdmOffset + 900) / 100 * 10 + '%';
            newsMediaText.innerText = 'News & Media';
            publicationText.style.fontSize = '0.6rem';
            aboutDescBox1.style.left = aboutOffset + 500 < 0 ? '1%' : ((aboutOffset + 500) / 100) * 3 > 10 ? '10%' : ((aboutOffset + 500) / 100) * 3 + '%';
            aboutDescBox2.style.right = aboutOffset + 500 < 0 ? '1%' : ((aboutOffset + 500) / 100) * 3 > 10 ? '10%' : ((aboutOffset + 500) / 100) * 3 + '%';
        }
        aboutDesc.forEach((item, index) => {
            item.style.opacity = (1 + (aboutOffset / viewHeight) * 2);
        });


        if (scrollTop >= document.querySelector(".publication").offsetTop - viewHeight / 2 && scrollTop < document.querySelector(".partners").offsetTop - viewHeight / 1.2) {
            publicationText.style.position = 'fixed';
            shine.style.position = 'fixed';
            publicationText.style.opacity = '1';
            shine.style.opacity = '1';
        } else {
            publicationText.style.position = 'absolute';
            shine.style.position = 'absolute';
            publicationText.style.opacity = '0';
            shine.style.opacity = '0';
        }

        if (scrollTop >= document.querySelector(".partners").offsetTop - viewHeight / 1.5 && scrollTop < document.querySelector(".footer").offsetTop - viewHeight / 1.2) {
            partners.forEach((item, index) => {
                item.style.opacity = '1';
            });

        } else {
            partners.forEach((item, index) => {
                item.style.opacity = '0';
            });
        }

        if (scrollTop >= document.querySelector(".about").offsetTop - viewHeight / 1.5) {
            main.style.opacity = '0';

        } else {
            main.style.opacity = '1';
        }




        window.requestAnimationFrame(loop);


    };
    loop();
});


// window.onload = () => {

// };

$('#toggle').click(function () {
    const title = document.querySelectorAll('.main-text');
    title.forEach((item, index) => {
        if (item.style.opacity === '0') {
            item.style.opacity = '1';
        } else {
            console.log(item.style);
        }
    });
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

$('#main-news2').click(function () {
    localStorage.setItem('title', '동아대, 美 밴더빌트대 바이오메디컬 이미지데이터 분석센터와 업무협약');
    localStorage.setItem('date', '2023.05.31.');
    localStorage.setItem('desc', '[파이낸셜뉴스] 동아대학교는 미국 밴더빌트대학 메디컬센터 바이오메디컬 이미지데이터 분석센터와 업무협약을 체결했다고 31일 밝혔다. 이번 협약으로 동아대와 밴더빌트대는 치매와 같은 퇴행성 뇌질환 예방 관련 임상 연구와 디지털헬스케어 기반 국제적 네트워크 구축과 지역인재 육성 등에 서로 협력하기로 했다. 동아대 승학캠퍼스 대학본부 대회의실에서 최근 열린 협약식엔 박현태 대외국제처장(디지털 헬스케어 연구소장)을 비롯 강도영 의과대학장과 강학묵 미국 밴더빌트 대학 바이오메디컬 이미지데이터 분석센터장, 핏투어스 채승원 대표, 연구원 등이 참석했다. 박 처장은 이날 “이번 협력을 통해 디지털 치료제 및 임상연구를 위한 실사용데이터(RWD)·실사용증거(RWE) 활용을 위한 국제적 연구네트워크를 실현할 수 있어 기쁘다”며 “연구개발(R&D)과 융합교육으로 양성된 동아대 학생들이 국제적 연구센터인 밴더빌트대학 바이오메디컬 이미지 센터 협력 등을 통해 글로컬 인재로 커 나가길 기대한다”고 말했다. 미국 밴더빌트대 강 센터장은 “바이오시장 성장 속도가 빠르고 잠재력도 크기 때문에 앞으로 더 많은 인재가 필요하다”며 “내년 초 부산에 들어설 부산-밴더빌트 바이오통계 데이터 사이언스 센터를 기반으로 동아대와 협업, 첨단 이미지 분석을 통한 R&D 및 인재 육성에 힘쓰겠다”라고 말했다.');
    localStorage.setItem('image', "../images/news/news2.png");
    window.location.href = 'detail.html';
});

$('#main-news1').click(function () {
    localStorage.setItem('title', '벤더빌트 바이오메디컬 데이터센터, 부산 온다');
    localStorage.setItem('date', '2023.06.02.');
    localStorage.setItem('desc', '[코메디닷컴][이미지 출처 : 클린아트코리아]부산에 국제적인 뇌질환 이미지 데이터센터가 생긴다. 퇴행성 뇌질환 디지털 치료제 개발은 물론 데이터 분석을 위한 핵심 시설의 하나다. 미국 ‘정밀의료’ 연구를 선도해온 밴더빌트(Vanderbilt)대 ‘바이오메디컬 이미지 데이터 분석센터’(센터장 강학묵)의 한국 분원이기도 하다. 내년 초 부산 강서구 경제자유구역에 들어설 ‘Busan-Vanderbilt Biostatistics Center for Data Sciences’다. 단기적으론 퇴행성 뇌질환 등 다양한 이미지 데이터들을 모으고 분석해주는 협력창구 역할을 하겠지만, 장기적으론 미국 ‘밴더빌트 바이오뱅크’처럼 모든 관련 데이터들이 모이고 또 기업, 병원, 연구자들이 서로 활용하는 ‘데이터 플랫폼’으로 나아갈 수 있다. 강 센터장은 2일 “의료영상은 의료기기와 영상분석기법 측면에서 빠르게 발전해왔고, 특히 인공지능(AI)이 결합한 이후부턴 더 눈부시게 변하고 있다”며 “부산-밴더빌트 이미지센터가 대한민국 영상데이터 분석 기술 발전은 물론 전문인력 양성에도 큰 도움이 될 것”이라 했다. 이를 위해 동아대(총장 이해우)와 지난 25일 업무협약도 맺었다. “치매와 같은 퇴행성 뇌 질환 예방 관련 임상연구, 디지털 헬스케어 기반 국제적 네트워크 구축, 지역 인재 육성 등에 적극적으로 협력해 나간다”는 취지다.특히 그 근간이 될 전문인력 양성이 중요하다.  “바이오 시장 성장 속도가 빠르고 잠재력도 크기 때문에 앞으로 더욱 많은 인재가 필요하다”는 것이다. 이날 협약식엔 강 센터장(사진 가운데)과 함께 동아대 강도영 의대 학장(사진 왼쪽 첫번째, 바이오헬스융합연구센터장)과 박현태 대외국제처장(사진 왼쪽 네번째, 디지털헬스케어연구소장), 핏투어스 채승원 대표 등이 참석했다.');
    localStorage.setItem('image', "../images/news/news1.png");
    window.location.href = 'detail.html';
});

$('#about-button').click(function () {
    window.location.href = 'about.html';
});

$('#news-button').click(function () {
    window.location.href = 'news.html';
});

$('#familyone-button').click(function () {
    window.location.href = 'familyone.html';
});


$('#publication1').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=%EC%9E%84%EC%A2%85%EB%8F%8C%EB%B4%84%EC%97%90+%EB%8C%80%ED%95%9C+%EA%B5%90%EC%9C%A1%EC%9D%98+%ED%95%84%EC%9A%94%EC%84%B1+%3A+2%EA%B0%9C+%EB%8C%80%ED%95%99%EB%B3%91%EC%9B%90%EC%9D%98+%EC%9D%B8%ED%84%B4%EC%9D%84+%EB%8C%80%EC%83%81%EC%9C%BC%EB%A1%9C+%EC%98%88%EB%B9%84+%EB%B6%84%EC%84%9D&btnG=');
});

$('#publication2').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Ventral+striatal+network+connectivity+reflects+reward+learning+and+behavior+in+patients+with+Parkinson%27s+disease&btnG=');
});

$('#publication3').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=+2019+The+relationship+between+domain-specific+subjective+cognitive+decline+and+Alzheimer%27s+pathology+in+normal+elderly&btnG=');
});

$('#publication4').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Intrinsic+functional+network+connectivity+is+associated+with+clinical+symptoms+and+cognition+in+late-life+depression&btnG=');
});

$('#publication5').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Brain+network+functional+connectivity+and+cognitive+performance+in+major+depressive+disorder&btnG=');
});

$('#publication6').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Network+localization+of+clinical%2C+cognitive%2C+and+neuropsychiatric+symptoms+in+Alzheimer%E2%80%99s+disease&btnG=');
});

$('#publication7').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Awareness+of+doctors%27+shared+decision-making+in+life-sustaining+care+decisions&btnG=');
});

$('#publication8').click(function () {
    window.open('https://scholar.google.com/scholar?hl=ko&as_sdt=0%2C5&q=Evaluating+a+shared+decision-making+intervention+regarding+dialysis+modality%3A+development+and+validation+of+self&btnG=');
});

$('#to-solutions').click(function () {
    let aboutOffset = document.querySelector(".dementia").offsetTop;

    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
});

$('#to-publication').click(function () {
    let aboutOffset = document.querySelector(".publication").offsetTop;
    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
    console.log('감');
});

$('#to-partners').click(function () {
    let aboutOffset = document.querySelector(".partners").offsetTop;
    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
    console.log('감');
});

$('#to-solutions2').click(function () {

    const title = document.querySelectorAll('.main-text');
    title.forEach((item, index) => {
        if (item.style.opacity === '0') {

            item.style.opacity = '1';
        } else {

            item.style.opacity = '0';
        }
    });
    $('.button_container').toggleClass('active');
    $('#overlay').toggleClass('open');
    let aboutOffset = document.querySelector(".dementia").offsetTop;
    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
});

$('#to-publication2').click(function () {

    const title = document.querySelectorAll('.main-text');
    title.forEach((item, index) => {
        if (item.style.opacity === '0') {

            item.style.opacity = '1';
        } else {

            item.style.opacity = '0';
        }
    });
    $('.button_container').toggleClass('active');
    $('#overlay').toggleClass('open');
    let aboutOffset = document.querySelector(".publication").offsetTop;
    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
});

$('#to-partners2').click(function () {
    const title = document.querySelectorAll('.main-text');
    title.forEach((item, index) => {
        if (item.style.opacity === '0') {

            item.style.opacity = '1';
        } else {

            item.style.opacity = '0';
        }
    });
    $('.button_container').toggleClass('active');
    $('#overlay').toggleClass('open');
    let aboutOffset = document.querySelector(".partners").offsetTop - 100;
    window.scrollTo({ top: aboutOffset, behavior: 'smooth' });
});