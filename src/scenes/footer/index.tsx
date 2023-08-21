import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">服务量化的在线数据分析平台.</p>
          <p>© AnLab All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">相关链接</h4>
          <p className="my-5">
            <a href="http://www.imech.ac.cn/">中国科学院力学研究所</a>
          </p>
          <p className="my-5">
            <a href="https://github.com/JeremyJ-P">
              小庞主页
            </a>
          </p>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">联系我们</h4>
          <p className="my-5">
            北京市海淀区北四环西路15号-中国科学院力学研究所
          </p>
          <p>2号楼4层</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
