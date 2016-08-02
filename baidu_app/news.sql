-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-21 17:47:11
-- 服务器版本： 5.5.42
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `image` varchar(200) CHARACTER SET utf8 NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `time` date NOT NULL,
  `tag` varchar(199) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `image`, `content`, `time`, `tag`) VALUES
(2, 'iPhone7营销，还那么高冷么', 'http://g.hiphotos.baidu.com/news/w%3D638/sign=6377015b41540923aa69607daa59d1dc/6609c93d70cf3bc771fb3294d900baa1cc112acb.jpg', '微博用户@小三不是哈士奇 今天发布了疑似 iPhone 7 机模的照片，而且是三款设备并排在一起的照片，分别是 iPhone 7 Pro、iPhone 7 Plus 和 iPhone 7。虽然关于 iPhone 7 Pro 的说法我们不是没有听过，但是互联网上关于它的照片信息几乎为零。不过，由于只是机模照片，我们也只能看个大概，iPhone 7 Pro 和 iPhone 7 Plus 之间看似没有区别。', '2016-06-12', 'baijia'),
(3, '女子腰缠15块金砖闯关 被女警识破', 'http://himg2.huanqiu.com/attachment2010/2016/0721/15/38/20160721033838112.jpg', '7月21日，记者从驻守在深港边界一线的武警广东边防六支队获悉，该支队官兵在深圳中英街验证大厅进镇通道查获一起涉嫌人身藏匿黄金走私案，一年轻女子腰间用黄色胶带绑15块金砖欲过关被查，查获金砖合计重量30斤，案值约人民币450万元。', '2016-07-21', 'recom'),
(4, '孙俪晒图纠结身材 粉丝纷纷安慰健康最重要', 'http://img001.21cnimg.com/photos/album/20160721/m600/9AB587BACCA790D7E0B3C57B2CA112B3.jpeg', '网易娱乐7月21日报道 7月21日上午，孙俪在微博晒出一张外出游玩的照片，照片中娘娘摆出搞怪pose显得十分可爱。可这回娘娘似乎也遇到难题：“体检说：你太瘦。镜头说：你太胖，怎么破。”\n\n　　网友们纷纷鸣不平：“镜头：谁敢在这里造次说娘娘胖？”表示健康最重要：“健康最重要，胖了没关系，本来就不是为了你的身材喜欢你。”', '2016-07-21', 'recom'),
(5, '蛇精脸拍戏了 戴上眼镜有点像吴亦凡(图)', 'http://pic.enorth.com.cn/003/018/978/00301897884_7987ea82.png', '内容提要：7月21日，有网友在微博晒出一组蛇精脸刘梓晨拍戏的现场', '2016-07-21', 'recom'),
(6, '台湾大巴事故罹难陆客家属抵台 灵堂前泪崩', 'http://a3.peoplecdn.cn/bdfb2633c391bc7e70cd5508022a691e.jpg', '49名罹难陆客家属21日下午抵达桃园机场，随后前往中坜殡仪馆。走入灵堂一看到亲人遗照，家属们压抑多时的情绪，终于全部发泄，顿时间哭天喊地，质问老天为何这样残忍，竟然夺走至亲家人，旁人闻之令人鼻酸。', '2016-07-21', 'recom'),
(7, '湖北一砂石大货车侧翻 压扁小轿车', 'http://a1.peoplecdn.cn/fb5179e38d55faa9283d1bec9f3ebfb0.jpg', ' 7月21日上午11时许，湖北宜昌高新区汕头路一辆满载砂石的大货车侧翻，压住了一辆白色小车，货车上砂石也倾覆到小轿车上，导致小车严重变形，车内人员被困。', '2016-07-21', 'recom'),
(8, '“最佳”和“神作”：电影宣发里的浮夸美学', 'http://t12.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C330%2C198%3Bw%3D638/sign=11201b1af01986185508b5c477dd0242/d52a2834349b033bf98e62a11dce36d3d539bd43.jpg&fm=37', '的话题，既不是来自狗血青春片，也不是跳票12年但口碑扑街的《大鱼海棠》，而是一部启动资金只有2万，总', '2016-07-21', 'baijia'),
(9, '北京暴雨刷爆朋友圈！但有着600年历史的故宫几乎未积水！', 'http://t12.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C330%2C198%3Bw%3D638/sign=11201b1af01986185508b5c477dd0242/d52a2834349b033bf98e62a11dce36d3d539bd43.jpg&fm=37', '自7月19日起，北京迎今年入汛以来最强降雨，北京市气象部门一天内发出三次暴雨蓝色预警信号，开启“强降雨模式”。20日8时40分，北京市气象台升级发布暴雨黄色预警信号；11时30分，北京市气象台升级发布暴雨橙色预警信号。', '2016-07-21', 'local'),
(10, '北京暴雨刷爆朋友圈！但有着600年历史的故宫几乎未积水！', 'http://timg01.baidu-img.cn/timg?tc&size=b840_473&sec=0&quality=100&cut_x=52&cut_y=0&cut_h=0&cut_w=840&di=783c48f23577ef35f1e61932a7596d45&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D2%252C', '微博用户@小三不是哈士奇 今天发布了疑似 iPhone 7 机模的照片，而且是三款设备并排在一起的照片，分别是 iPhone 7 Pro、iPhone 7 Plus 和 iPhone 7。虽然关于 iPhone 7 Pro 的说法我们不是没有听过，但是互联网上关于它的照片信息几乎为零。不过，由于只是机模照片，我们也只能看个大概，iPhone 7 Pro 和 iPhone 7 Plus 之间看似没有区别。', '2016-07-20', 'img'),
(11, '陈晓归宁宴告白陈妍希：会拼命对你好 每天逗你笑', 'http://t12.baidu.com/it/u=http://p2.ifengimg.com/a/2016_30/cc5daf570852e88_size441_w399_h600.jpg&fm=37', '甜翻归宁宴所有宾客！双陈夫妻刚才进入喜宴会场，两人紧紧牵着手，走上以双C为概念打造的长型T台。小两口互相对彼此诉说情话，陈晓说“我会拼命地对你好”，陈妍希回“以后你乖乖的，我也乖乖的，我们就这样过一辈子吧”。随后情不自禁拥吻超过20秒，全场宾客欢呼叫好，也感受到他们的甜蜜。', '2016-07-21', 'fun'),
(12, '警方破获一起电信诈骗案，居然暗藏“非法购销银行卡”', 'http://t12.baidu.com/it/u=http://pic.yangtse.com/d/file/epaper/yaowen/b1469052918yidonggg_s.jpg&fm=37', '扬子晚报讯（记者 朱姝）7月7日，本报与江苏移动联合开设“预防打击', '2016-07-21', 'society');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
