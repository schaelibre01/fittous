window.onload = () => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (event) => {
        cursor.style.top = event.pageY + "px";
        cursor.style.left = event.pageX + "px";
    });

    const loop = () => {

        if (document.body.clientWidth > 1400) {

        }
        else if (document.body.clientWidth > 1023) {


        } else if (document.body.clientWidth > 767) {

        } else {

        }


        window.requestAnimationFrame(loop);
    };
    loop();
}


$('#toggle').click(function () {
    const title = document.querySelectorAll('.main-text');
    title.forEach((item, index) => {
        if (item.style.opacity === '0') {
            console.log(item.style);
            item.style.opacity = '1';
        } else {
            console.log(item.style);
            item.style.opacity = '0';
        }
    });
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


$('#logo').click(function () {
    console.log('눌림');
    window.location.href = '/';
});

$('#news1').click(function () {
    localStorage.setItem('title', '핏투어스, 서울대학교 행복연구센터와 업무 협약 체결');
    localStorage.setItem('date', '2023.01.26.');
    localStorage.setItem('desc', '핏투어스는 2023년 1월 26일, 서울대학교 행복연구센터(센터장 심리학과 최인철 교수)와 업무 협약(MOU)를 체결하였다. 양 기관은 심리 및 의료 데이터 분석과 플랫폼 개발에 대한 연구개발 협력을 추진하기로 합의하였다.');
    localStorage.setItem('image', "../images/news/news_seoul.png");
    window.location.href = 'detail.html';
});

$('#news2').click(function () {
    localStorage.setItem('title', '핏투어스, 동국대학교일산병원 디지털치료제연구소와 업무 협약 체결');
    localStorage.setItem('date', '2023.02.01.');
    localStorage.setItem('desc', '핏투어스는 2023년 2월 1일, 동국대학교일산병원 디지털치료제연구소(소장 신장내과 신성준 교수)와 업무 협약(MOU)를 체결하였다. 양 기관은 노인성 치매 및 만성콩팥병 등 노인성 질환에 대한 디지털 헬스케어 플랫폼 및 헬스케어 피드백 개발에 대한 연구 협력을 추진하기로 합의하였다.');
    localStorage.setItem('image', "../images/news/news_dongguk1.png");
    window.location.href = 'detail.html';
});

$('#news3').click(function () {
    localStorage.setItem('title', '동아대, 美 밴더빌트대 바이오메디컬 이미지데이터 분석센터와 업무협약');
    localStorage.setItem('date', '2023.05.31.');
    localStorage.setItem('desc', '[파이낸셜뉴스] 동아대학교는 미국 밴더빌트대학 메디컬센터 바이오메디컬 이미지데이터 분석센터와 업무협약을 체결했다고 31일 밝혔다. 이번 협약으로 동아대와 밴더빌트대는 치매와 같은 퇴행성 뇌질환 예방 관련 임상 연구와 디지털헬스케어 기반 국제적 네트워크 구축과 지역인재 육성 등에 서로 협력하기로 했다. 동아대 승학캠퍼스 대학본부 대회의실에서 최근 열린 협약식엔 박현태 대외국제처장(디지털 헬스케어 연구소장)을 비롯 강도영 의과대학장과 강학묵 미국 밴더빌트 대학 바이오메디컬 이미지데이터 분석센터장, 핏투어스 채승원 대표, 연구원 등이 참석했다. 박 처장은 이날 “이번 협력을 통해 디지털 치료제 및 임상연구를 위한 실사용데이터(RWD)·실사용증거(RWE) 활용을 위한 국제적 연구네트워크를 실현할 수 있어 기쁘다”며 “연구개발(R&D)과 융합교육으로 양성된 동아대 학생들이 국제적 연구센터인 밴더빌트대학 바이오메디컬 이미지 센터 협력 등을 통해 글로컬 인재로 커 나가길 기대한다”고 말했다. 미국 밴더빌트대 강 센터장은 “바이오시장 성장 속도가 빠르고 잠재력도 크기 때문에 앞으로 더 많은 인재가 필요하다”며 “내년 초 부산에 들어설 부산-밴더빌트 바이오통계 데이터 사이언스 센터를 기반으로 동아대와 협업, 첨단 이미지 분석을 통한 R&D 및 인재 육성에 힘쓰겠다”라고 말했다.');
    localStorage.setItem('image', "../images/news/news2.png");
    window.location.href = 'detail.html';
});

$('#news4').click(function () {
    localStorage.setItem('title', '벤더빌트 바이오메디컬 데이터센터, 부산 온다');
    localStorage.setItem('date', '2023.06.02.');
    localStorage.setItem('desc', '[코메디닷컴][이미지 출처 : 클린아트코리아]부산에 국제적인 뇌질환 이미지 데이터센터가 생긴다. 퇴행성 뇌질환 디지털 치료제 개발은 물론 데이터 분석을 위한 핵심 시설의 하나다. 미국 ‘정밀의료’ 연구를 선도해온 밴더빌트(Vanderbilt)대 ‘바이오메디컬 이미지 데이터 분석센터’(센터장 강학묵)의 한국 분원이기도 하다. 내년 초 부산 강서구 경제자유구역에 들어설 ‘Busan-Vanderbilt Biostatistics Center for Data Sciences’다. 단기적으론 퇴행성 뇌질환 등 다양한 이미지 데이터들을 모으고 분석해주는 협력창구 역할을 하겠지만, 장기적으론 미국 ‘밴더빌트 바이오뱅크’처럼 모든 관련 데이터들이 모이고 또 기업, 병원, 연구자들이 서로 활용하는 ‘데이터 플랫폼’으로 나아갈 수 있다. 강 센터장은 2일 “의료영상은 의료기기와 영상분석기법 측면에서 빠르게 발전해왔고, 특히 인공지능(AI)이 결합한 이후부턴 더 눈부시게 변하고 있다”며 “부산-밴더빌트 이미지센터가 대한민국 영상데이터 분석 기술 발전은 물론 전문인력 양성에도 큰 도움이 될 것”이라 했다. 이를 위해 동아대(총장 이해우)와 지난 25일 업무협약도 맺었다. “치매와 같은 퇴행성 뇌 질환 예방 관련 임상연구, 디지털 헬스케어 기반 국제적 네트워크 구축, 지역 인재 육성 등에 적극적으로 협력해 나간다”는 취지다.특히 그 근간이 될 전문인력 양성이 중요하다.  “바이오 시장 성장 속도가 빠르고 잠재력도 크기 때문에 앞으로 더욱 많은 인재가 필요하다”는 것이다. 이날 협약식엔 강 센터장(사진 가운데)과 함께 동아대 강도영 의대 학장(사진 왼쪽 첫번째, 바이오헬스융합연구센터장)과 박현태 대외국제처장(사진 왼쪽 네번째, 디지털헬스케어연구소장), 핏투어스 채승원 대표 등이 참석했다.');
    localStorage.setItem('image', "../images/news/news1.png");
    window.location.href = 'detail.html';
});


$('#news5').click(function () {
    localStorage.setItem('title', '핏투어스, 동국대학교일산병원 개방형실험실 구축사업 참여기업 협약 체결');
    localStorage.setItem('date', '2023.07.23.');
    localStorage.setItem('desc', `핏투어스는 2023년 7월 11일, 동국대학교일산병원 개방형실험실과 협약을 체결하고 개방형실험실 구축 사업에 참여한다.보건의료 분야 혁신기술을 보유한 창업기업이 한 단계 더 성장할 수 있도록 병원의 우수한 연구자원을 통해 임상의사와 기업 간 공동 연구, 기업의 제품 실증, 상용화 프로그램 등을 지원하는 본 2023년 개방형실험실 구축사업을 통해\n양 기관은 임상의 등과의 협업을 통해 기술 경쟁력을 확보하고 병원의 우수한 연구자원(인력, 연구장비, 노하우 등)의 활용 촉진을 통한 국가 연구개발성과의 산업 내 기여도 제고를 추진한다.`);
    localStorage.setItem('image', "../images/news/news_dongguk2.jpg");
    window.location.href = 'detail.html';
});

$('#news6').click(function () {
    localStorage.setItem('title', '핏투어스, 벤더빌트 대학교 이미지 데이터 연구소(BIDAL)와 업무 협약 체결');
    localStorage.setItem('date', '2023.07.11.');
    localStorage.setItem('desc', '핏투어스는 2023년 7월 23일, 미 벤더빌트 대학교 이미지 데이터 연구소(BIDAL, 소장 Biostatistics 강학묵 교수)와 업무 협약(MOU)를 체결하였다. 핏투어스와 밴더빌트 이미지 데이터 연구소는 긴밀한 협력관계를 맺고, 의료 데이터의 수집 및 분석에 대한 플랫폼 개발에 관한 업무 협력을 진행하기로 양사가 합의하였다.');
    localStorage.setItem('image', "../images/news/news_vanderbilt.png");
    window.location.href = 'detail.html';
});