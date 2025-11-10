import "./Foot.css";
function Foot() {
  return (
    <div className="foot_main">
      <div className="area">
        <div className="info">
          <div className="service_info">
            <a className="foot_info">이용약관</a>
            <a className="foot_info">유료이용안내</a>
            <strong className="foot_info">개인정보처리방침</strong>
            <a className="foot_info">기업고객</a>
            <a className="foot_info">문의하기</a>
            <a className="foot_info">공정위사업자정보</a>
            <strong className="">(주) 카카오</strong>
            <p className="">
              카카오 이모티콘샵에서 판매되는 콘텐츠의 저작권은 콘텐츠 제공자에게
              있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수
              있습니다.
            </p>
          </div>
          <div className="comp_info">
            <dl className="list_info">
              대표정신아사업자등록번호120-81-47521통신판매업신고번호제2015-제주아라-0032호
            </dl>
            <dl className="list_info">
              주소제주특별자치도 제주시 첨단로
              242(영평동)호스팅사업자(주)카카오고객센터1577-3754메일help.notice@kakaocorp.com
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Foot;
