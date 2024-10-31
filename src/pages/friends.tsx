import React from "react";
import Layout from "@theme/Layout";
import styles from "./friends.module.css";

// 创建页面 https://docusaurus.io/zh-CN/docs/creating-pages
export default function friends() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <main className="margin-vert--lg">
        <section className="margin-top--lg margin-bottom--lg text--center">
          <h1>友情链接</h1>
          <p>本站开放申请友情链接，欢迎大家来交换友链！</p>
          <p>
            如需添加你的网站，请
            <a
              href="https://wekube.com/zh-Hans/contactus"
              target="_blank"
              rel="noopener noreferrer"
            >
              联系我们
            </a>
            {/* <a
              href="https://wekube.com/zh-Hans/contactus"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              🙏 请添加你的网站
            </a> */}
          </p>
        </section>

        <section className="container margin-top--l margin-bottom--lg">
          <FriendsLinkGrid />
        </section>
      </main>
    </Layout>
  );
}

function FriendsLinkGrid() {
  return (
    <ul className={`clean-list ${styles.cardList}`}>
      <OneSite
        title="WeLiu"
        subTitle="这里记录一些值得分享的内容"
        href="https://weliu.com/"
        avatar="https://weliu.com/upload/unnamed.jpg"
      />

      <OneSite
        title="我不是咕咕鸽"
        subTitle="learn or earn"
        href="https://blog.laoda.de"
        avatar="https://blog.laoda.de/upload/guguge.webp"
      />

      <OneSite
        title="FunnyWii's Zone"
        subTitle="算法攻城狮/皮具爱好者/摩托骑不倒/吉他能出声"
        href="https://funnywii.com"
        avatar="https://funnywii.com/upload/icon4.jpg"
      />
    </ul>
  );
}

/*
嗷~~，博主请求交换友链！
贵站我已经添加~ https://engine.wekube.com/friends 感谢感谢！！！

名称：WeKube
简介：一个应用托管平台，让您快捷部署应用，无需服务器！
网址：https://wekube.com/
图片：https://wekube.com/logo.png


*/

function OneSite({
  title,
  subTitle,
  href,
  avatar,
}: {
  title: string;
  subTitle: string;
  href: string;
  avatar: string;
}) {
  return (
    <a
      className={`${styles["page-links-item"]} ${styles["post-preview"]} ${styles["link-hver"]}`}
      style={{
        textDecoration: "none",
        padding: 8,
      }}
      href={href}
      target="_blank"
    >
      <div
        style={{
          width: 66,
          height: 66,
          flexShrink: 0,
        }}
      >
        <img
          style={{
            margin: "0.5rem",
            width: 50,
            height: 50,
            borderRadius: 10,
          }}
          src={avatar}
          alt={title}
        />
      </div>
      <div
        className={` ${styles["page-links-content"]}`}
        style={{ marginLeft: "1rem" }}
      >
        <h4
          style={{
            fontWeight: 700,
            paddingTop: 0,
            marginBottom: 8,
            marginTop: "0.5rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h4>
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subTitle}
        </div>
      </div>
    </a>
  );
}
