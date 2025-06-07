
module.exports = {
    title: '罗兰测试',
    logo: '/images/logo/猞猁.png',
    description: '各类测试理论, 技能, 经验, 故事, 职业发展的博客文档',
    theme: 'reco',
    themeConfig: {
        nav: [{'text': '首页', 'link': '/'}, {'text': '优质博客', 'items': [{'text': '首页', 'link': 'loran.tech'}]}],
        sidebar: {'/': [{'title': '资源下载', 'path': '/', 'collapsable': false, 'children': [{'title': '博客简介', 'path': '/'}]}]},
    },
enhanceAppFiles: [
    {
        name: 'custom-footer',
        content: `
            export default ({
                router
            }) => {
                router.afterEach((to, from) => {
                    if (typeof window !== 'undefined') {
                        // 检查是否已经存在页脚，避免重复添加
                        if (!document.querySelector('.custom-footer')) {
                            const footer = document.createElement('footer');
                            footer.className = 'custom-footer'; // 给页脚加一个类名
                            footer.innerHTML = \`
                            <footer style="text-align: center; margin-top: 0px; padding: 0px;">
                            <p>粤ICP备2024288002号 | copyright © 2024-present</p>
                            </footer>
                            \`;
                            document.body.appendChild(footer);
                        }
                    }
                });
            };
        `
    }
],
plugins: [
    '@vuepress/plugin-back-to-top', // 返回顶部插件
    '@vuepress/plugin-medium-zoom', // 图片放大插件
]
}
