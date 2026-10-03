(function () { 
    var data = [
        { "i": "sdi-1", "k": "link", "l": "主页导航", "c": "mdi-home", "y": "page", "t": "/zh/home.html" }, 
        { "i": "sdi-2", "k": "divider", "l": null, "c": null, "y": null, "t": null }, 
        { "i": "sdi-3", "k": "link", "l": "我是谁？", "c": "mdi-chevron-right", "y": "page", "t": "/zh/lulu.html" }, 
        { "i": "sdi-4", "k": "link", "l": "我，纸巾专业户", "c": "mdi-chevron-right", "y": "page", "t": "/zh/thought.html" }, 
        { "i": "sdi-5", "k": "divider", "l": null, "c": null, "y": null, "t": null }, 
        { "i": "sdi-6", "k": "link", "l": "精神科/药理学", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PnP.html" },
        { "i": "sdi-7", "k": "link", "l": "跨性别/心理学", "c": "mdi-chevron-right", "y": "page", "t": "/zh/TransgenderPsychology.html" },
        { "i": "sdi-8", "k": "link", "l": "精神病学 诊断标准", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Diagnostic.html" }, 
        { "i": "sdi-9", "k": "link", "l": "精神病学 抑郁症", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Depression.html" }, 
        { "i": "sdi-10", "k": "link", "l": "精神病学 焦虑谱系障碍", "c": "mdi-chevron-right", "y": "page", "t": "/zh/ANSD.html" },
        { "i": "sdi-11", "k": "link", "l": "精神病学 双相情感障碍", "c": "mdi-chevron-right", "y": "page", "t": "/zh/BipolarDisorder.html" },
        { "i": "sdi-12", "k": "link", "l": "精神病学 精神分裂症", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Schizophrenia.html" }, 
        { "i": "sdi-13", "k": "link", "l": "精神病学 孤独症谱系障碍", "c": "mdi-chevron-right", "y": "page", "t": "/zh/ASD.html" }, 
        { "i": "sdi-14", "k": "link", "l": "精神病学 注意缺陷与多动障碍", "c": "mdi-chevron-right", "y": "page", "t": "/zh/ADHD.html" },
        { "i": "sdi-15", "k": "link", "l": "精神病学 AuDHD", "c": "mdi-chevron-right", "y": "page", "t": "/zh/AuDHD.html" }, 
        { "i": "sdi-16", "k": "link", "l": "精神病学 进食障碍", "c": "mdi-chevron-right", "y": "page", "t": "/zh/EatingDisorder.html.html" }, 
        { "i": "sdi-17", "k": "link", "l": "精神药品 药物概述", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PsychotropicDrugs.html" }, 
        { "i": "sdi-18", "k": "link", "l": "精神药品 镇静安眠药", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Sedatives.html" }, 
        { "i": "sdi-19", "k": "link", "l": "精神药品 抗抑郁药", "c": "mdi-chevron-right", "y": "page", "t": "/zh/AntiDepressant.html" }, 
        { "i": "sdi-20", "k": "link", "l": "跨性别HRT激素类药品", "c": "mdi-chevron-right", "y": "page", "t": "/zh/HRTMeds.html" }, 
        { "i": "sdi-21", "k": "divider", "l": null, "c": null, "y": null, "t": null }, 
        { "i": "sdi-22", "k": "link", "l": "心理学基础篇", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PsyFoundation.html" }, 
        { "i": "sdi-23", "k": "link", "l": "心理学 人格理论与自我认同", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PsyPersonality.html" },
        { "i": "sdi-24", "k": "link", "l": "跨性别者常见心理困境", "c": "mdi-chevron-right", "y": "page", "t": "/zh/CommonMTFpsy.html" }, 
        { "i": "sdi-25", "k": "link", "l": "心理学QA与零碎的知识", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PsyQ&A.html" },
        { "i": "sdi-26", "k": "divider", "l": null, "c": null, "y": null, "t": null },
        { "i": "sdi-27", "k": "link", "l": "护肤美白指南2025重制版", "c": "mdi-chevron-right", "y": "page", "t": "/zh/SkinCare2025.html" }, 
        { "i": "sdi-28", "k": "link", "l": "护肤基础理论Q&A", "c": "mdi-chevron-right", "y": "page", "t": "/zh/BasicSkinCare.html" }, 
        { "i": "sdi-29", "k": "link", "l": "美白核心：防晒", "c": "mdi-chevron-right", "y": "page", "t": "/zh/SunProtection.html" }, 
        { "i": "sdi-30", "k": "link", "l": "皮肤美白/补水/湿度", "c": "mdi-chevron-right", "y": "page", "t": "/zh/bodyskincare.html" }, 
        { "i": "sdi-31", "k": "link", "l": "面部美白/护理", "c": "mdi-chevron-right", "y": "page", "t": "/zh/FaceSkinCare.html" }, 
        { "i": "sdi-32", "k": "link", "l": "洗澡", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Shower.html" }, 
        { "i": "sdi-33", "k": "link", "l": "刷酸概述", "c": "mdi-chevron-right", "y": "page", "t": "/zh/AcidMain.html" }, 
        { "i": "sdi-34", "k": "link", "l": "刷酸：AHA", "c": "mdi-chevron-right", "y": "page", "t": "/zh/AHA.html" }, 
        { "i": "sdi-35", "k": "link", "l": "刷酸：BHA", "c": "mdi-chevron-right", "y": "page", "t": "/zh/BHA.html" }, 
        { "i": "sdi-36", "k": "link", "l": "刷酸：PHA", "c": "mdi-chevron-right", "y": "page", "t": "/zh/PHA.html" }, 
        { "i": "sdi-37", "k": "divider", "l": null, "c": null, "y": null, "t": null }, 
        { "i": "sdi-38", "k": "link", "l": "减肥/塑形/健身 Q&A", "c": "mdi-chevron-right", "y": "page", "t": "/zh/DietQA.html" }, 
        { "i": "sdi-39", "k": "link", "l": "减肥概念论述", "c": "mdi-chevron-right", "y": "page", "t": "/zh/DietBase.html" }, 
        { "i": "sdi-40", "k": "link", "l": "减肥原理", "c": "mdi-chevron-right", "y": "page", "t": "/zh/DietExplain.html" }, 
        { "i": "sdi-41", "k": "link", "l": "饮食核心 碳蛋脂", "c": "mdi-chevron-right", "y": "page", "t": "/zh/CPF.html" }, 
        { "i": "sdi-42", "k": "link", "l": "怎么吃？", "c": "mdi-chevron-right", "y": "page", "t": "/zh/HowToEat.html" }, 
        { "i": "sdi-43", "k": "link", "l": "抗抑郁药中毒急救指南", "c": "mdi-chevron-right", "y": "page", "t": "/zh/ADFirstAid.html" }, 
        { "i": "sdi-44", "k": "link", "l": "苯二氮卓中毒急救指南", "c": "mdi-chevron-right", "y": "page", "t": "/zh/BZDFirstAid.html" }, 
        { "i": "sdi-45", "k": "link", "l": "联用型药物中毒急救指南", "c": "mdi-chevron-right", "y": "page", "t": "/zh/CombinationFirstAid.html" }, 
        { "i": "sdi-46", "k": "link", "l": "亚硝酸盐自杀者急救指南", "c": "mdi-chevron-right", "y": "page", "t": "/zh/Nitrite.html" }, 
        { "i": "sdi-47", "k": "link", "l": "易滥用(OD)药物类中毒急救指南", "c": "mdi-chevron-right", "y": "page", "t": "/zh/OverdoseFirstAid" }]; 
        window.__luluvSidebarData = data; 
        function applySidebar(page) {
            if (!page || !(page instanceof Element)) return; 
            try {
                var encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data)))); 
                page.setAttribute('sidebar', encoded); 
            } 
            catch (err) { page.setAttribute('sidebar', ''); } }
            var pages = document.querySelectorAll('page'); 
            if (pages.length) { Array.prototype.forEach.call(pages, applySidebar); } })();