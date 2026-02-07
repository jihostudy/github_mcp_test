import {
  footer,
  footerInner,
  csSection,
  csTitle,
  csPhone,
  csTime,
  linkGroups,
  linkGroup,
  linkGroupTitle,
  linkItem,
  snsRow,
  snsIcon,
  companyInfo,
  copyright,
} from "./Footer.css";

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footerInner}>
        <div className={csSection}>
          <p className={csTitle}>고객센터</p>
          <p className={csPhone}>1544-7199</p>
          <p className={csTime}>
            운영시간: 평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)
            <br />
            주말, 공휴일 휴무
          </p>
        </div>

        <div className={linkGroups}>
          <div className={linkGroup}>
            <p className={linkGroupTitle}>이용안내</p>
            <a className={linkItem} href="#">이용약관</a>
            <a className={linkItem} href="#">개인정보처리방침</a>
            <a className={linkItem} href="#">청소년보호정책</a>
          </div>
          <div className={linkGroup}>
            <p className={linkGroupTitle}>고객지원</p>
            <a className={linkItem} href="#">공지사항</a>
            <a className={linkItem} href="#">FAQ</a>
            <a className={linkItem} href="#">1:1 문의</a>
          </div>
          <div className={linkGroup}>
            <p className={linkGroupTitle}>판매자</p>
            <a className={linkItem} href="#">입점 안내</a>
            <a className={linkItem} href="#">판매자 센터</a>
          </div>
        </div>

        <div className={snsRow}>
          <span className={snsIcon}>IG</span>
          <span className={snsIcon}>YT</span>
          <span className={snsIcon}>TW</span>
          <span className={snsIcon}>FB</span>
        </div>

        <div className={companyInfo}>
          (주) 무신사 | 대표: 한문일
          <br />
          사업자등록번호: 000-00-00000 | 통신판매업신고: 제0000-서울성동-0000호
          <br />
          서울특별시 성동구 아차산로 00, 무신사캠퍼스
        </div>

        <p className={copyright}>
          &copy; MUSINSA All rights reserved.
        </p>
      </div>
    </footer>
  );
}
