(function(e) {
    function t(t) {
        for (var i, n, r = t[0], l = t[1], h = t[2], c = 0, d = []; c < r.length; c++) n = r[c], Object.prototype.hasOwnProperty.call(s, n) && s[n] && d.push(s[n][0]), s[n] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        u && u(t);
        while (d.length) d.shift()();
        return o.push.apply(o, h || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], i = !0, n = 1; n < a.length; n++) {
                var r = a[n];
                0 !== s[r] && (i = !1)
            }
            i && (o.splice(t--, 1), e = l(l.s = a[0]))
        }
        return e
    }
    var i = {},
        n = {
            app: 0
        },
        s = {
            app: 0
        },
        o = [];

    function r(e) {
        return l.p + "js/" + ({
            classroom: "classroom",
            home: "home",
            progress: "progress",
            projects: "projects",
            resources: "resources"
        } [e] || e) + "." + {
            classroom: "c3157e0b",
            home: "a39637ba",
            progress: "6a3da27b",
            projects: "f89c10d3",
            resources: "2ae69669"
        } [e] + ".js"
    }

    function l(t) {
        if (i[t]) return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.e = function(e) {
        var t = [],
            a = {
                home: 1,
                progress: 1,
                projects: 1
            };
        n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function(t, a) {
            for (var i = "css/" + ({
                    classroom: "classroom",
                    home: "home",
                    progress: "progress",
                    projects: "projects",
                    resources: "resources"
                } [e] || e) + "." + {
                    classroom: "31d6cfe0",
                    home: "f4395526",
                    progress: "cb82569e",
                    projects: "7a2da886",
                    resources: "31d6cfe0"
                } [e] + ".css", s = l.p + i, o = document.getElementsByTagName("link"), r = 0; r < o.length; r++) {
                var h = o[r],
                    c = h.getAttribute("data-href") || h.getAttribute("href");
                if ("stylesheet" === h.rel && (c === i || c === s)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
                h = d[r], c = h.getAttribute("data-href");
                if (c === i || c === s) return t()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet", u.type = "text/css", u.onload = t, u.onerror = function(t) {
                var i = t && t.target && t.target.src || s,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = i, delete n[e], u.parentNode.removeChild(u), a(o)
            }, u.href = s;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(u)
        })).then((function() {
            n[e] = 0
        })));
        var i = s[e];
        if (0 !== i)
            if (i) t.push(i[2]);
            else {
                var o = new Promise((function(t, a) {
                    i = s[e] = [t, a]
                }));
                t.push(i[2] = o);
                var h, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, l.nc && c.setAttribute("nonce", l.nc), c.src = r(e);
                var d = new Error;
                h = function(t) {
                    c.onerror = c.onload = null, clearTimeout(u);
                    var a = s[e];
                    if (0 !== a) {
                        if (a) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                n = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + i + ": " + n + ")", d.name = "ChunkLoadError", d.type = i, d.request = n, a[1](d)
                        }
                        s[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    h({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = h, document.head.appendChild(c)
            } return Promise.all(t)
    }, l.m = e, l.c = i, l.d = function(e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) l.d(a, i, function(t) {
                return e[t]
            }.bind(null, i));
        return a
    }, l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return l.d(t, "a", t), t
    }, l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, l.p = "/", l.oe = function(e) {
        throw console.error(e), e
    };
    var h = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = h.push.bind(h);
    h.push = t, h = h.slice();
    for (var d = 0; d < h.length; d++) t(h[d]);
    var u = c;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0735": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("VAST Challenge 2022")]), t("h2", [e._v("Challenge Overview")]), t("p", [t("em", [e._v("In Engagement, Ohio, the future is now! For years this sleepy bedroom community was a secret gem in the heart of the state. But now the word is out and the people are running, not walking, to buy up their claim on this bit of paradise!")])]), t("p", [e._v("Anticipating rapid growth, the city of Engagement, Ohio USA is doing a participatory urban planning exercise to understand the current state of the city and identify opportunities for future growth. About 1000 representative residents in this modest-sized city have agreed to provide data using the city’s urban planning app, which records the places they visit, their spending, and their purchases, among other things. From these volunteers, the city will have data to assist with their major community revitalization efforts, including how to allocate a very large city renewal grant they have recently received. As a visual analytics expert, you have joined the city planning team to make sense of the data provided by these residents.")]), t("p", [t("strong", [e._v("Challenge 1: Demographics and Relationships")]), e._v(" involves understanding the city’s demographics. Given social networks and other information about the city, you will analyze the available data to prepare a one-page fact sheet about the city’s demographics, its neighborhoods, and its business base.")]), t("p", [e._v("In Challenge 1, you will use visual analytic techniques to address the following questions:")]), t("ul", [t("li", [e._v("Assuming the volunteers are representative of the city’s population, characterize what you can about the demographics of the town. Provide your rationale and supporting data. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Consider the social activities in the community. What patterns do you see in the social networks in the town? Describe up to ten significant patterns you observe, with evidence and rationale. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Identify the predominant business base of the town, and describe patterns you observe. Limit your response to 10 images and 500 words.")]), t("li", [e._v("From your answers to questions 1-3, assemble a one-page summary that provides the key information to share with residents about the town.")])]), t("p", [t("strong", [e._v("Challenge 2: Patterns of Life")]), e._v(" considers the patterns of daily life throughout the city. You will describe the daily routines for some representative people, characterize the travel patterns to identify potential bottlenecks or hazards, and examine how these patterns change over time and seasons.")]), t("p", [e._v("In Challenge 2, you will use visual analytic techniques to address these questions:")]), t("ul", [t("li", [e._v("Assuming the volunteers are representative of the city’s population, characterize the distinct areas of the city that you identify. For each area you identify, provide your rationale and supporting data. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Where are the busiest areas in Engagement? Are there traffic bottlenecks that should be addressed? Explain your rationale. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Participants have given permission to have their daily routines captured. Choose two different participants with different routines and describe their daily patterns, with supporting evidence. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Over the span of the dataset, how do patterns change in the city change? Describe up to 10 significant changes, with supporting evidence. Limit your response to 10 images and 500 words.")])]), t("p", [t("strong", [e._v("Challenge 3: Economic")]), e._v(" considers the financial health of the city. Over time, are businesses growing or shrinking? How are people changing jobs? Are standards of living improving or declining over time?")]), t("p", [e._v("Consider the financial status of Engagement’s businesses and residents, and use visual analytic techniques to address these questions.")]), t("ul", [t("li", [e._v("Over the period covered by the dataset, which businesses appear to be more prosperous? Which appear to be struggling? Describe your rationale for your answers. Limit your response to 10 images and 500 words.")]), t("li", [e._v("How does the financial health of the residents change over the period covered by the dataset? How do wages compare to the overall cost of living in Engagement? Are there groups that appear to exhibit similar patterns? Describe your rationale for your answers. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Describe the health of the various employers within the city limits. What employment patterns do you observe? Do you notice any areas of particularly high or low turnover? Limit your response to 10 images and 500 words.")])]), t("p", [e._v("The "), t("strong", [e._v("Grand Challenge")]), e._v(" requires you to put together your insights from Challenges 1, 2, and 3 to summarize your assessment of the city and recommend where the city improvement grant should be invested. Use your insights from Challenges 1-3 to answer the following questions:")]), t("ul", [t("li", [e._v("What are the most pressing issues for the current residents of Engagement, if historically average growth takes place? Describe the rationale for your answers. Limit your response to 10 images and 500 words.")]), t("li", [e._v("Assuming historical trends continue, where should the city invest to improve its citizens’ lives? Describe the rationale for your answers. Limit your response to 10 images and 500 words.")]), t("li", [e._v("If the anticipated rapid growth takes place, what are the greatest areas of need for city investment? Describe the rationale for your answers. Limit your response to 10 images and 500 words.")]), t("li", [e._v("What are the greatest areas of uncertainty in your assessment? What would help reduce this uncertainty? Limit your response to 100 words and 3 images.")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "0f23": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Introduction")]), t("p", [e._v("Traditionally various tasks, such as discovering market trends and predicting future prices of assets have been addressed with charts and line graphs in the financial data domain. Analyzing E-transaction time-series in a temporal context is critical for understanding transaction behavior, learning user preferences, and discovering temporal trends. This point of sale data is temporal, multivariate, and spatial in nature; therefore, it is well suited for analysis in a visual analytics environment. However, it is difficult to find systems that manage the characteristics of point of sale data effectively.")]), t("p", [t("strong", [e._v("MarketAnalyzer")]), e._v(" leveragesan enhanced pixel-based visualization approach to efficiently utilize limited screen space for the large store and product information. It also allows exploring current sales volume, trend, and temporal market share growth rates using a series of linked views. Another important visual tool for E-transactions time-series is introduced in "), t("strong", [e._v("VAET")]), e._v(".")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Reproduce visualizations in MarketAnalyzer "), t("strong", [e._v("or")]), e._v(" VAET for business data in d3")])]), t("li", [t("p", [e._v("Analyze novel patterns in the data")])]), t("li", [t("p", [e._v("Find out why author use this visualization method")])]), t("li", [t("p", [e._v("Summarize shortcomings and consider how to improve.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Reproduce one paper result (components) using d3 or other visualization tool (3-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Find some patterns in a dataset (9-10 week)")])]), t("li", [t("p", [e._v("Find a different way to visualize the dataset (11-13 week)")])]), t("li", [t("p", [e._v("Compare your visualization method with paper’s (14-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Implementation tools：")]), t("ul", [t("li", [e._v("D3")])]), t("h2", [e._v("Resources：")]), t("ul", [t("li", [t("p", [e._v("Papers:  https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/j.1467-8659.2012.03117.x\nhttps://www.researchgate.net/publication/264273467")])]), t("li", [t("p", [e._v("Datasets:")]), t("ul", [t("li", [e._v("MarketAnalyzer Data: https://data.world/garyhoov/2012-us-retail-sales")]), t("li", [e._v("VAET Data: https://www.kaggle.com/ntnu-testimon/paysim1")])])])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    3504: function(e) {
        e.exports = JSON.parse('{"bigdataTitle":"大数据分析实践","homePage":"课程首页","projectList":"课题列表","resultList":"成果展示","courseResources":"课程资源","courseEntries":"课程入口","courseEntriesHint":"（仅限选课学生进入）","location":"山东大学・青岛","courseIntro":"课程介绍","courseIntroContent":"在大数据时代下，发现数据背后的特征并加以利用，已经成为当前商业运作下的主流思路。在大数据分析实践这门课中，学生系统地学习科研工作的具体流程，结合具体领域，如计算机视觉、自然语言处理、虚拟现实等，充分发掘海量数据当中存在的特征，完成一个具体的项目，并对主流算法加以创新，最后完成一篇高质量的论文，从而培养学生发现问题、获取知识、文献检索、算法优化等方面的能力。","courseDesc":"课程描述","courseDescContent":"“大数据分析实践”是“数据科学与大数据技术”专业的重要课程之一，本课程的学习旨在构建学生集数据管理、数据分析、数据挖掘、数据可视化和人机交互于一体的完整知识体系，采用实验项目驱动的教学新模式，在课程实验（项目）中巩固理论知识，从而培养学生综合运用数学、自然科学、工程基础和专业知识分析和解决数据科学与大数据技术领域复杂工程问题的能力，以及基于科学原理并采用科学方法对复杂工程问题进行研究的能力。","aims":"教学目标","aims1":"大数据分析实践课程将围绕交互式数据处理与分析的需求开展教学，通过综合教授数据处理、数据挖掘、数据分析、数据可视化等方面的理论知识和实际操作能力。","aims2":"理论知识方面，基于目前先进的数据交互式系统以及技术讲解理论基础，探讨如何能够通过交互式技术提高下一代数据处理系统性能、如何赋予数据处理系统交互式分析以及决策的能力等方面的议题。主要讲述数据管理、数据挖掘、数据可视化等方面理论基础以及共性知识。","aims3":"实际操作方面，以综合性科学研究课题为导向，引导学生在课题研究中做出实际贡献，并指导有兴趣的同学参加全国高校大数据应用创新大赛。科研课题包括但不限于：在AR、VR中的探索；商业可视化分析；文本情感分析；二维人体骨骼体势估计。考评方面将提高实际操作能力分数占比，突出强化对学生科研能力和实践能力的训练。","request":"教学要求","requestContent":"通过本课程的学习，主要培养学生以下能力：","requestContent1":"工程知识。通过本课程的学习，学生具备扎实的数据挖掘以及数据可视化理论基础，通过大数据可视分析及应用创新等实践教学环节，最终使得学生具备开发大数据应用系统的基础能力。","requestContent2":"综合应用能力。学生了解数据管理、数据分析、数据挖掘、数据可视化以及人机交互等的相互关系，能在设计和实现大数据应用创新系统时把握整体方法和架构，完成高品质的设计和开发。","requestContent3":"研究能力。在教学内容中增加数据挖掘以及数据可视化的前沿研究内容，通过实践项目提高学生提出问题、解决问题以及分析问题能力。学期末每位学生需提交一篇研究短文（4 pages + 1 reference）。","requestContent4":"沟通能力。通过分组交流、课堂汇报、报告撰写等，培养学生的沟通能力，使得学生能够快速获取新知识和新信息。学生需在学期中及学期末分别汇报自己的研究进展。","reference":"参考资料","authors":"编著者","pub":"出版社","pubYear":"出版年","ptPress":"人民邮电出版社","phei":"电子工业出版社","noResult":"暂无成果信息","fetching":"正在获取文件列表…","fileName":"文件名","url":"地址","teacherAndTA":"授课教师与助教信息","LOT":"教学大纲","week":"周次","date":"日期","topic":"主题","grading":"评分细则","task":"个人任务","paperPres":"期中文献阅读与展示","paperPresDesc":"选择与你所选项目最相关的参考论文进行阅读与展示","finalProject":"期末项目","paperWriting":"书面报告","pages":"页正文","referencePage":"页参考文献","presentation":"项目展示","oral":"汇报质量","codeQuality":"代码质量","attend":"课堂参与程度","attendency":"签到情况","disscuss":"讨论与作业","disscussDesc":"包含课上讨论与课下作业完成情况（3项个人作业以及5项小组作业）","peer":"组间评价","bouns":"各小组组长将获得5%的额外加分"}')
    },
    "38a8": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("After the successful resolution of the 2014 kidnapping at GAStech’s Abila, Kronos office, GAStech officials determined that Abila offices needed a significant upgrade. In 2015, the growing company moved into a state-of-the-art three-story building near their previous location. The new office is built to the highest energy efficiency standards, and it is fully instrumented with sensors that identify everything from building temperatures to concentration levels of various chemicals.")]), t("p", [e._v("GAStech has recently introduced new security processes. Staff members are now required to wear proximity (prox) cards while in the building, so that incidents like the 2014 kidnapping cannot occur again.")]), t("p", [e._v("As an expert in visual analytics, you have been hired to help GAStech understand its steady stream of operations data. This includes data from stationary and mobile sensors of multiple types. The company needs your help in operational issues as well as security issues. Can you identify the issues to safeguard the company’s employees?")]), t("p", [e._v("The new office is built to the highest energy efficiency standard, but as with any new building, there are still several HVAC issues to work out. The building is divided into several HVAC (heating, ventilation, and air conditioning) zones. Each zone is instrumented with sensors that report building temperatures, heating and cooling system status values, and concentration levels of various chemicals such as carbon dioxide (abbreviated CO2) and hazium (abbreviated Haz), a recently discovered and possibly dangerous chemical. CEO Sten Sanjorge Jr. has read about hazium and requested that these sensors be included. However, they are very new and very expensive, so GAStech can afford only a small number of sensors.")]), t("p", [e._v("With their move into the new building, GAStech also introduced new security procedures, which staff members are not necessarily adopting consistently. Staff members are now required to wear proximity (prox) cards while in the building.")]), t("p", [e._v("The building is instrumented with passive prox card readers that cover individual building zones. The prox card zones do not generally correspond with the HVAC zones. When a prox card passes into a new zone, it is detected and recorded. Most, but not all, areas are still open to staff members even if they forget their prox cards. People are somewhat careless with their prox cards, but some diligent staff members will go to the security desk and pick up a new prox card if their old one is mislaid.")]), t("p", [e._v("As part of the deal to entice GAStech to move into this new building, the builders included a free robotic mail delivery system. This robot, nicknamed Rosie, travels the halls periodically, moving between floors in a specially designed chute. Rosie is equipped with a mobile prox sensor, which identifies the prox cards in the areas she travels through.")]), t("p", [e._v("As an expert in visual analytics, you have been hired to help GAStech understand its operations data. In this challenge, you are given two weeks of building and prox sensor data. Can you use visual analytics to identify typical patterns of and issues of concern? You will have the following data and supporting information at your disposal:")]), t("ul", [t("li", [e._v("A building layout for the GAStech offices, including the maps of the prox zones and the HVAC zones")]), t("li", [e._v("A current list of employees, roles, and office assignments")]), t("li", [e._v("A description of the data formats and fields provided")]), t("li", [e._v("Proximity sensor data for each of the prox zone regions")]), t("li", [e._v("Proximity sensor data from Rosie the mobile robot")]), t("li", [e._v("HVAC sensor readings and status information from each of the building’s HVAC zones")]), t("li", [e._v("Hazium readings from four sensors.")])]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("What are the typical patterns in the prox card data? What does a typical day look like for GAStech employees?")])]), t("li", [t("p", [e._v("Describe up to ten of the most interesting patterns that appear in the building data. Describe what is notable about the pattern and explain its possible significance.")])]), t("li", [t("p", [e._v("Describe up to ten notable anomalies or unusual events you see in the data. Prioritize those issues that are most likely to represent a danger or a serious issue for building operations.")])]), t("li", [t("p", [e._v("Describe up to five observed relationships between the proximity card data and building data elements. If you find a causal relationship (for example, a building event or condition leading to personnel behavior changes or personnel activity leading to building operations changes), describe your discovered cause and effect, the evidence you found to support it, and your level of confidence in your assessment of the relationship.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://www.vacommunity.org/2016+VAST+Challenge%3A+MC2")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "40f3": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("Introduction")]), t("ul", [t("li", [e._v("Community is the implicit structure in social networks.\nIn academic social networks, the users with similar or\nsame research interests are more likely to be in the\nsame community with close links and similar attributes.")]), t("li", [e._v("Effective community detection results can be further\nutilized for user analytics and user recommendation.\nTask")])]), t("ol", [t("li", [e._v("Build a social network for computer scientists\n(coauthorship, affiliations, education experience,\nresearch interests, work experience)")]), t("li", [e._v("Can you find the hot research fields and their spatial\ndistributions in China? Why?")]), t("li", [e._v("Can you recommend scholars according to user\nprovided interests?")]), t("li", [e._v("Can you predict the possible links between scholars?")])]), t("p", [e._v("url:https://www.scholat.com/research/opendata/#user_recommendation")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "46c4": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("St. Himark is a vibrant community located in the Oceanus Sea. Home to the world-renowned St. Himark Museum, beautiful beaches, and the Wilson Forest Nature Preserve, St. Himark is one of the region’s best cities for raising a family and provides employment across a number of industries including the Always Safe Nuclear Power Plant. Well, all that was true before the disastrous earthquake that hits the area during the course of this year’s challenge. Mayor Jordan, city officials, and emergency services are overwhelmed and are desperate for assistance in understanding the true situation on the ground and how best to deploy the limited resources available to this relatively small community.")]), t("p", [e._v("One of St. Himark’s largest employers is the Always Safe nuclear power plant. The pride of the city, it produces power for St. Himark’s needs and exports the excess to the mainland providing a steady revenue stream. However, the plant was not compliant with international standards when it was constructed and is now aging. As part of its outreach to the broader community, Always Safe agreed to provide funding for a set of carefully calibrated professional radiation monitors at fixed locations throughout the city. Additionally, a group of citizen scientists led by the members of the Himark Science Society started an education initiative to build and deploy lower cost homemade sensors, which people can attach to their cars. The sensors upload data to the web by connecting through the user’s cell phone. The goal of the project was to engage the community and demonstrate that the nuclear plant’s operations were not significantly changing the region’s natural background levels of radiation.")]), t("p", [e._v("When an earthquake strikes St. Himark, the nuclear power plant suffers damage resulting in a leak of radioactive contamination. Further, a coolant leak sprayed employees’ cars and contaminated them at varying levels. Now, the city’s government and emergency management officials are trying to understand if there is a risk to the public while also responding to other emerging crises related to the earthquake as well as satisfying the public’s concern over radiation.")]), t("h2", [e._v("Project Task")]), t("p", [e._v("Your task, as supported by visual analytics that you apply, is to help St. Himark’s emergency management team combine data from the government-operated stationary monitors with data from citizen-operated mobile sensors to help them better understand conditions in the city and identify likely locations that will require further monitoring, cleanup, or even evacuation. Will data from citizen scientists clarify the situation or make it more uncertain? Use visual analytics to develop responses to the questions below. Novel visualizations of uncertainty are especially interesting for this mini-challenge.")]), t("ol", [t("li", [e._v("Visualize radiation measurements over time from both static and mobile sensors to identify areas where radiation over background is detected. Characterize changes over time.")]), t("li", [e._v("Use visual analytics to represent and analyze uncertainty in the measurement of radiation across the city.\n"), t("ol", [t("li", [e._v("Compare uncertainty of the static sensors to the mobile sensors. What anomalies can you see? Are there sensors that are too uncertain to trust?")]), t("li", [e._v("Which regions of the city have greater uncertainty of radiation measurement? Use visual analytics to explain your rationale.")]), t("li", [e._v("What effects do you see in the sensor readings after the earthquake and other major events? What effect do these events have on uncertainty?")])])]), t("li", [e._v("Given the uncertainty you observed in question 2, are the radiation measurements reliable enough to locate areas of concern?\n"), t("ol", [t("li", [e._v("Highlight potential locations of contamination, including the locations of contaminated cars. Should St. Himark officials be worried about contaminated cars moving around the city?")]), t("li", [e._v("Estimate how many cars may have been contaminated when coolant leaked from the Always Safe plant. Use visual analysis of radiation measurements to determine if any have left the area.")]), t("li", [e._v("Indicated where you would deploy more sensors to improve radiation monitoring in the city. Would you recommend more static sensors or more mobile sensors or both? Use your visualization of radiation measurement uncertainty to justify your recommendation.")])])]), t("li", [e._v("Summarize the state of radiation measurements at the end of the available period. Use your novel visualizations and analysis approaches to suggest a course of action for the city. Use visual analytics to compare the static sensor network to the mobile sensor network. What are the strengths and weaknesses of each approach? How do they support each other?")])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("https://vast-challenge.github.io/2019/MC2.html")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "47f5": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("Poetry Visualization")]), t("h2", [e._v("方博文 宋家庆 苗琳瑜 张一凡 吴祥钧")]), t("p", [e._v("Ancient poetry is a special style in Chinese literature, which carries the splendid culture of Chinese civilization with a long history and endless life, it is a perfect fusion carrier of philosophy and aesthetics, and is the treasure of Chinese traditional culture and the essence of traditional spirit. Learning and mastering the knowledge of ancient Chinese poetry and analyzing the connections between them is a good way to understand the development of Chinese civilization and even human civilization. In order to explore the hidden information in ancient poetry, we start from the essence of ancient poetry, analyze the data of ancient poetry from four aspects: time, geography, emotion and category, and make a poetry visualization system. However, the traditional data analysis methods are often ineffective when applied directly to the ancient poetry dataset, and we modify the ancient poetry dataset according to local conditions for the two tasks of text clustering and sentiment analysis. At the same time, in terms of visualization, we combine visual form with the traditional Chinese art style, so that poetry data can better convey the hidden historical information.")]), t("p", [e._v("Ancient poetry is the essence of traditional Chinese culture and occupies\nan important position in the splendid ancient culture of China. They are not\nonly rich in connotation, all-embracing and profound in meaning, with high\naesthetic value and strong artistic influence, but also have concise language,\nshort and concise, beautiful words and rhymes, which make them unique in the\nChinese literary world. Therefore, we analyze and visualize the data of ancient\npoems from four perspectives of emotion, category, time and geography, taking\ninto account the following factors.")]), t("ul", [t("li", [t("p", [e._v("Poets write poems to express their thoughts, ambitions, and aspirations.")])]), t("li", [t("p", [e._v("The themes of poetry can often be classified as a border, garden, farewell,\netc. The techniques or intentions used in different categories of poetry are\nvery different.")])]), t("li", [t("p", [e._v("In the long history, poems often reflect the changes of a dynasty or era, and\nthe policies of a dynasty can greatly influence the enthusiasm for poetry.")])]), t("li", [t("p", [e._v("There are many famous places in China, and poets in ancient times often\ntraveled to the mountains and rivers, using them to express their emotions,\nand different places are often rich in different historical heritage.")]), t("p", [e._v("In addition to the above tasks, we also implemented three tasks: similar poetry\nsearch, poetry continuation, and generation of hidden poems, in order to enrich\ninteractivity and add further insight into the mysteries of ancient.")])])]), t("p", [e._v("The demo of this project is below.")]), t("p", [t("video", {
                    attrs: {
                        src: a("a4f1"),
                        controls: "controls"
                    }
                })])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    5072: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Introduction")]), t("p", [e._v("人体姿态估计是一个应用十分广泛的课题。它的基本任务是：将图片中人体的重要关节点标注出来，并按照人体结构进行拓扑连接。人体姿态估计技术在体育健身、动作采集、3D试衣、舆情监测等领域具有广阔的应用前景。OpenPose是基于卷积神经网络和监督学习，并以caffe为框架写成的开源库，可以实现人的面部表情、躯干和四肢甚至手指的跟踪，同时具有较好的鲁棒性，可以称作世界上第一个基于深度学习的实时多人二维姿态估计。")]), t("p", [e._v("该项目的主要思想：1、对输入的图像进行卷积，提取相关特征；2、对提取的特征分别获取Part Confidence Maps和Part Affinity Fields，获取到图像中的各个肢体的所在位置；3、根据上一步的信息得到Part Association，匹配起同一个人的关节点并连接，形成整体骨架。")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("运行OpenPose项目代码，使用不同的图片数据集进行测试")])]), t("li", [t("p", [e._v("记录标记不成功的例子，提出改进思路并实践")])])]), t("h2", [e._v("Schedule")]), t("p", [e._v("第2周：中秋节放假")]), t("p", [e._v("第3-4周：搭建OpenPose所需环境：Cmake(GUI)+Visual Studio 2019+Cuda10.0")]), t("p", [e._v("第5周：国庆节放假")]), t("p", [e._v("第6-7周：建立项目并运行demo")]), t("p", [e._v("第8-10周：使用不同的图片数据集测试，发现不成功标记的例子并分类（比如遮挡、非直立、扭曲的姿势等），针对一种或几种没有成功标记的例子，思考讨论，提出可行的优化方案。")]), t("p", [e._v("第11-13周：实现优化方案的代码，给出优化后的结果")]), t("p", [e._v("第14-15周：结果汇总，制作报告")]), t("p", [e._v("第16-17周：presentation")]), t("h2", [e._v("Resources")]), t("ul", [t("li", [t("p", [e._v("Openpose项目源码：https://github.com/CMU-Perceptual-Computing-Lab/openpose")])]), t("li", [t("p", [e._v("论文地址：https://arxiv.org/pdf/1611.08050.pdf")])]), t("li", [t("p", [e._v("相关环境搭建教程：https://blog.csdn.net/qq_20226441/article/details/82380030")])]), t("li", [t("p", [e._v("图片数据库（仅供参考）：http://cocodataset.org/#download")])]), t("li", [t("p", [e._v("示例视频：https://www.youtube.com/watch?v=C1Sxk6zxWLM")])])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "517e": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("三维数字孪生可视化场景设计与构建")]), t("p", [e._v("如今，城市、政务、医疗等领域涌现出了大量对三维数据可视化的市场需求。三维数据可视化能为用户提供更直观的视觉感受和更高的沉浸感，但如何在三维场景中准确直观的表达数据，挖掘和展现出数据中隐藏的模式与规律十分具有挑战性。利用图形渲染技术和大数据可视分析技术，能够实时监测数据变化，分析数据中潜在的问题，分析数据的时空趋势，辅助用户快速决策。大数据可视分析与可视化将数据智能处理、视觉表征和交互分析有机地结合起来，使机器智能和人类智慧深度融合、优势互补，为各行各业的分析、指挥和决策提供有效手段和决策依据。")]), t("p", [e._v("本赛题要求队伍结合以下主题，使用相关数据（数据集不作限定，公开数据集或自行建模）进行场景设计、故事剧本设计、效果设计和数据可视设计，并构建（可以使用任意技术、工具）三维场景，在构建的三维场景中利用可视分析与三维可视化技术、方法，对场景和数据进行探索、展示、分析等。")]), t("p", [e._v("参赛选手可以选择但不限于以下主题（开放式）：")]), t("ul", [t("li", [e._v("城市主题")]), t("li", [e._v("使用三维可视化和图形渲染技术构建出城市三维场景，包括但不限于城市建筑、路网与周边自然环境（地形、植被、水等），在该场景中使用可视分析技术，探索城市数据中隐藏的模式与规律。分析任务可以选择但不限于以下任务：交通态势感知、事故响应模拟、事故场景还原、园区规划与防控可视分析、游客身份多视角电子导游、疫情精准防控、场景的朝暮和四季变化等任务。")]), t("li", [e._v("工业主题")]), t("li", [e._v("使用图形渲染技术构建出工业三维场景，包括但不限于生产流水线、工程建造项目。在该场景中使用可视分析技术，探索工业数据中隐藏的模式与规律。分析任务可从以下样例中选择:")]), t("li", [e._v("（1）动态的呈现某个产品的在车间的生产过程；并详细展示各个流程的作用。")]), t("li", [e._v("（2）展现某个工业园区内的厂房与道路，展现原材料输入消耗与产品的输出，并通过数据分析工业流水线生产的时空规律，识别各生产环节问题或设备故障警告等。")]), t("li", [e._v("建筑主题")]), t("li", [e._v("基于BIM模型构建建筑的三维场景，在该场景中使用可视分析技术，对数据进行探索、展示。分析任务可从以下样例中选择:")]), t("li", [e._v("（1）请选择一个建筑，古今中外皆可，通过第一人称或者上帝视角，对建筑进行介绍，介绍内容包括但不限于其结构、设计目的、承重受力分析、随时间的风雨侵蚀效果等。")]), t("li", [e._v("（2）场景的朝暮、四季变化，要求过渡自然，平滑。")]), t("li", [e._v("自选主题")]), t("li", [e._v("构建三维场景并基于该场景设置分析问题，并提出解决方案。")])]), t("h1", [e._v("中华古籍数字人文创意（指定数据集）")]), t("p", [e._v("该赛题要求参赛选手根据给定数据集进行创作。数据集将由专业机构提供若干种能代表中华文化文明传承的少量珍贵古籍样本和目录数据集。鼓励学生跨学科组队，利用前沿信息技术和数字设计工具深度挖掘中华古代典籍的价值，以数字人文作品的新颖形态创造性地展现古籍的文物性、艺术性和知识性，实现“中华传统文化的创造性转化和创新性应用”，让传承数千年的古籍在新时代“活起来”、在全球的文化舞台上火起来。本题目包括两类数据集，参赛选手可以选择其中一部分使用：")]), t("p", [e._v("（1）"), t("strong", [e._v("中华古籍原本图片数据集（1.5G）")]), e._v("，左图为原本数据集列表，右图为示例（高福墓誌 唐 王羲之）。使用该类古籍原本数据，需签署使用协议，签字扫描件上传后申请数据下载。协议下载链接："), t("a", {
                    attrs: {
                        href: "https://chinavis.org/2022/document/2022/get_data.php?index=3"
                    }
                }, [e._v("下载协议")]), e._v("、数据申请链接："), t("a", {
                    attrs: {
                        href: "https://s99x45wjic.jiandaoyun.com/f/6246bf2dd10a490008ec8f93"
                    }
                }, [e._v("申请数据")]), e._v("。")]), t("p", [t("img", {
                    attrs: {
                        src: "https://chinavis.org/2022/images/challenge/1.png",
                        alt: "img"
                    }
                }), t("img", {
                    attrs: {
                        src: "https://chinavis.org/2022/images/challenge/2.png",
                        alt: "img"
                    }
                })]), t("p", [e._v("（2）"), t("strong", [e._v("中华古籍书目数据")]), e._v("：包括舊唐書經籍志、日本國見在書目録、宋史藝文志、隋書經籍志、新唐書藝文志等。数据下载链接："), t("a", {
                    attrs: {
                        href: "https://chinavis.org/2022/document/2022/get_data.php?index=4"
                    }
                }, [e._v("古籍书目数据集下载")]), e._v(" （约700KB）")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "53fe": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("VAST Challenge 2021")]), t("h2", [e._v("Overview")]), t("p", [e._v("Note: This scenario and all the people, places, groups, technologies, contained therein are fictitious. Any resemblance to real people, places, groups, or technologies is purely coincidental.")]), t("p", [e._v("In the roughly twenty years that Tethys-based GAStech has been operating a natural gas production site in the island country of Kronos, it has produced remarkable profits and developed strong relationships with the government of Kronos. However, GAStech has not been as successful in demonstrating environmental stewardship.")]), t("p", [e._v("In January, 2014, the leaders of GAStech are celebrating their new-found fortune as a result of the initial public offering of their very successful company. In the midst of this celebration, several employees of GAStech go missing. An organization known as the Protectors of Kronos (POK) is suspected in the disappearance, but things may not be what they seem.")]), t("p", [e._v("As an expert in visual analytics, you are called in to help law enforcement from Kronos and Tethys.")]), t("h2", [e._v("Mini-Challenge 1")]), t("p", [e._v("Mini-Challenge 1 looks at the relationships and conditions that led up to the kidnapping. As an analyst, you have a set of current and historical news reports at your disposal, as well as resumes of numerous GAStech employees and email headers from two weeks of internal GAStech company email. Can you identify the complex relationships among all of these people and organizations?")]), t("p", [e._v("Please visit "), t("a", {
                    attrs: {
                        href: "https://vast-challenge.github.io/2021/MC1.html"
                    }
                }, [e._v("VAST Challenge 2021: Mini-Challenge 1")]), e._v(" for more information and to download the data.")]), t("h2", [e._v("Mini-Challenge 2")]), t("p", [e._v("Mini-Challenge 2 asks you to analyze movement and tracking data. GAStech provides many of their employees with company cars for their personal and professional use, but unbeknownst to the employees, the cars are equipped with GPS tracking devices. You are given tracking data for the two weeks leading up to the disappearance, as well as credit card transactions and loyalty card usage data. From this data, can you identify anomalies and suspicious behaviors? Can you identify which people use which credit and loyalty cards?")]), t("p", [e._v("Please visit "), t("a", {
                    attrs: {
                        href: "https://vast-challenge.github.io/2021/MC2.html"
                    }
                }, [e._v("VAST Challenge 2021: Mini-Challenge 2")]), e._v(" for more information and to download the data.")]), t("h2", [e._v("Mini-Challenge 3")]), t("p", [e._v("Mini-Challenge 3 poses a social media and text analysis challenge. You will be given a collection of microblogs and emergency calls from the days surrounding the disappearance. Can evaluate the changing levels of risk to the public and recommend actions?")]), t("p", [e._v("Please visit "), t("a", {
                    attrs: {
                        href: "https://vast-challenge.github.io/2021/MC3.html"
                    }
                }, [e._v("VAST Challenge 2021: Mini-Challenge 3")]), e._v(" for more information and to download the data.")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("8e6e"), a("ac6a"), a("456d");
        var i = a("ade3"),
            n = (a("cadf"), a("551c"), a("f751"), a("097d"), a("2b0e")),
            s = a("e069"),
            o = a.n(s),
            r = function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("Layout", [t("Header", {
                    staticStyle: {
                        background: "#2d8cf0",
                        "user-select": "none"
                    }
                }, [t("div", {
                    staticStyle: {
                        display: "flex",
                        "flex-direction": "row"
                    }
                }, [t("h1", {
                    staticStyle: {
                        "flex-grow": "1",
                        color: "white"
                    }
                }, [e._v(e._s(e.$t("bigdataTitle")))]), t("Menu", {
                    attrs: {
                        mode: "horizontal",
                        theme: "primary",
                        "active-name": "1"
                    }
                }, [t("MenuItem", {
                    attrs: {
                        name: "1",
                        to: "/"
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "ios-home"
                    }
                }), e._v(e._s(e.$t("homePage")) + "\n          ")], 1), t("MenuItem", {
                    attrs: {
                        name: "2",
                        to: "projects"
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "ios-list-box"
                    }
                }), e._v(e._s(e.$t("projectList")) + "\n          ")], 1), t("MenuItem", {
                    attrs: {
                        name: "3",
                        to: "progress"
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "ios-code-working"
                    }
                }), e._v(e._s(e.$t("resultList")) + "\n          ")], 1), t("MenuItem", {
                    attrs: {
                        name: "5",
                        to: "classroom"
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "ios-book"
                    }
                }), e._v(e._s(e.$t("courseEntries")) + "\n          ")], 1), t("MenuItem", {
                    attrs: {
                        name: "0"
                    }
                }, [t("span", {
                    staticStyle: {
                        display: "inline-block",
                        height: "100%"
                    },
                    on: {
                        click: function(t) {
                            e.$root.$i18n.locale = "en" == e.$root.$i18n.locale ? "zh" : "en"
                        }
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "ios-globe-outline"
                    }
                }), e._v(e._s("en" == e.$i18n.locale ? "Chinese" : "English") + "\n            ")], 1)])], 1)], 1)]), t("Content", {
                    staticStyle: {
                        padding: "48px",
                        "min-height": "calc(100vh - 133px)",
                        margin: "0 auto",
                        "max-width": "1440px",
                        width: "100%",
                        background: "white"
                    }
                }, [t("router-view")], 1), t("Footer", [t("div", [t("span", {
                    staticStyle: {
                        float: "left"
                    }
                }, [e._v("©" + e._s(e.year) + " " + e._s(e.$t("location")))]), t("a", {
                    staticStyle: {
                        float: "right"
                    },
                    attrs: {
                        href: "https://github.com/SDUBigDataCourse"
                    }
                }, [t("Icon", {
                    attrs: {
                        type: "logo-github"
                    }
                }), e._v("Github")], 1)])])], 1)], 1)
            },
            l = [],
            h = {
                data: function() {
                    return {
                        year: 2020
                    }
                },
                mounted: function() {
                    this.$set(this, "year", (new Date).getFullYear())
                }
            },
            c = h,
            d = (a("ac5a"), a("2877")),
            u = Object(d["a"])(c, r, l, !1, null, null, null),
            p = u.exports,
            m = (a("7f7f"), a("8c4f"));
        n["default"].use(m["a"]);
        var v = null,
            f = new m["a"]({
                routes: [{
                    path: "/",
                    name: "home",
                    meta: {
                        title: "homePage"
                    },
                    component: function() {
                        return a.e("home").then(a.bind(null, "bb51"))
                    }
                }, {
                    path: "/projects",
                    name: "projects",
                    meta: {
                        title: "projectList"
                    },
                    component: function() {
                        return a.e("projects").then(a.bind(null, "acca"))
                    }
                }, {
                    path: "/progress",
                    name: "progress",
                    meta: {
                        title: "resultList"
                    },
                    component: function() {
                        return a.e("progress").then(a.bind(null, "e65a"))
                    }
                }, {
                    path: "/resources",
                    name: "resources",
                    meta: {
                        title: "courseResources"
                    },
                    component: function() {
                        return a.e("resources").then(a.bind(null, "93b9"))
                    }
                }, {
                    path: "/classroom",
                    name: "classroom",
                    meta: {
                        title: "courseEntries"
                    },
                    component: function() {
                        return a.e("classroom").then(a.bind(null, "1636"))
                    }
                }]
            });

        function g(e) {
            v = e
        }
        f.beforeEach((function(e, t, a) {
            document.title = v ? v.t(e.meta.title) + " - " + v.t("bigdataTitle") : "大数据分析实践", null === f.resolve(e).resolved.name && a("/"), a()
        }));
        var y = a("2f62");
        n["default"].use(y["a"]);
        var _ = function(e) {
                return a("c884")("./".concat(e, ".md")).default
            },
            w = new y["a"].Store({
                state: {
                    projects: [{
                        id: 22,
                        name: "SEEDB: Efficient Data-Driven Visualization. Recommendations to Support Visual Analytics",
                        href: "",
                        thumbnail: "/images/SEEDB.jpg",
                        markdown: _("SEEDB")
                    }, {
                        id: 21,
                        name: "大气污染时空经济效益可视分析",
                        href: "",
                        thumbnail: "/images/大气污染时空经济效益可视分析.jpg",
                        markdown: _("大气污染时空经济效益可视分析")
                    }, {
                        id: 20,
                        name: "Social Network Analysis for Computer Scientists",
                        href: "",
                        thumbnail: "/images/SocialNetworkAnalysis.jpg",
                        markdown: _("SocialNetworkAnalysis")
                    }, {
                        id: 19,
                        name: "大规模科学数据可视分析系统",
                        href: "",
                        thumbnail: "/images/大规模科学数据可视分析系统.jpg",
                        markdown: _("大规模科学数据可视分析系统")
                    }, {
                        id: 18,
                        name: "VAST Challenge 2023",
                        href: "",
                        thumbnail: "/images/fisheye.png",
                        markdown: _("VAST2023")
                    }, {
                        id: 14,
                        name: "VAST Challenge 2022",
                        href: "",
                        thumbnail: "/images/VR.jpg",
                        markdown: _("VAST2022")
                    }, {
                        id: 17,
                        name: "VAST Challenge 2021",
                        href: "",
                        thumbnail: "/images/VAST2021.png",
                        markdown: _("VAST2021")
                    }, {
                        id: 15,
                        name: "ChinaVis Challenge 2022",
                        href: "",
                        thumbnail: "/images/ChinaVis2022.jpg",
                        markdown: _("ChinaVis2022")
                    }, {
                        id: 16,
                        name: "Graph Challenge",
                        href: "",
                        thumbnail: "/images/GraphChallenge.png",
                        markdown: _("GraphChallenge")
                    }, {
                        id: 17,
                        name: "Classification in Cryo-Electron Tomograms",
                        href: "",
                        thumbnail: "/images/CCET.png",
                        markdown: _("CCET")
                    }, {
                        id: 10,
                        name: "ChinaVis Challenge 2021",
                        href: "",
                        thumbnail: "/images/ChinaVis2021.png",
                        markdown: _("ChinaVis2021")
                    }, {
                        id: 11,
                        name: "VAST Challenge 2019 - MC2",
                        href: "",
                        thumbnail: "/images/VAST2019.jpeg",
                        markdown: _("VAST2019")
                    }, {
                        id: 9,
                        name: "VAST Challenge 2018 - MC1",
                        href: "",
                        thumbnail: "/images/VAST2018.jpg",
                        markdown: _("VAST2018")
                    }, {
                        id: 12,
                        name: "VAST Challenge 2018 - MC2",
                        href: "",
                        thumbnail: "/images/VAST2018_2.jpeg",
                        markdown: _("VAST2018_2")
                    }, {
                        id: 13,
                        name: "Visual Analytics for Nature Images",
                        href: "",
                        thumbnail: "/images/Nature.png",
                        markdown: _("Nature")
                    }],
                    previousProjects: [{
                        id: 5,
                        name: "VAST Challenge 2012 - MC1",
                        href: "",
                        thumbnail: "/images/VAST2012.jpg",
                        markdown: _("VAST2012")
                    }, {
                        id: 6,
                        name: "VAST Challenge 2014 - MC2",
                        href: "",
                        thumbnail: "/images/VAST2014.png",
                        markdown: _("VAST2014")
                    }, {
                        id: 7,
                        name: "VAST Challenge 2015 - MC1",
                        href: "",
                        thumbnail: "/images/VAST2015.jpg",
                        markdown: _("VAST2015")
                    }, {
                        id: 8,
                        name: "VAST Challenge 2016 - MC2",
                        href: "",
                        thumbnail: "/images/VAST2016.jpg",
                        markdown: _("VAST2016")
                    }, {
                        id: 0,
                        name: "Visual Exploration in AR",
                        href: "",
                        thumbnail: "/images/AR.jpeg",
                        markdown: _("AR")
                    }, {
                        id: 1,
                        name: "Visual Exploration in VR",
                        href: "",
                        thumbnail: "/images/VR.jpg",
                        markdown: _("VR")
                    }, {
                        id: 2,
                        name: "Visual Analytics + Business",
                        href: "",
                        thumbnail: "/images/business.jpg",
                        markdown: _("business")
                    }, {
                        id: 3,
                        name: "Sentiment Analysis",
                        href: "",
                        thumbnail: "/images/sentiment.png",
                        markdown: _("sentiment")
                    }, {
                        id: 4,
                        name: "Openpose: 2D pose estimation from single image",
                        href: "",
                        thumbnail: "/images/openpose.jpg",
                        markdown: _("openpose")
                    }],
                    classrooms: [{
                        id: 0,
                        name: "2019年秋季课程",
                        enName: "Autumn class, 2019",
                        entry: "https://classroom.github.com/classrooms/55434637-sdubigdatacourse-2019",
                        repos: [{
                            name: "1015课堂讨论",
                            enName: "discussion - 10/15/2019",
                            markdown: _("191015disscussion")
                        }]
                    }, {
                        id: 1,
                        name: "2020年秋季课程",
                        enName: "Autumn class, 2020",
                        entry: "https://classroom.github.com/classrooms/55434637-sdubigdatacourse-2020",
                        repos: []
                    }, {
                        id: 2,
                        name: "2021年秋季课程",
                        enName: "Autumn class, 2021",
                        entry: "/projects",
                        repos: []
                    }, {
                        id: 3,
                        name: "2022年秋季课程",
                        enName: "Autumn class, 2022",
                        entry: "https://icloud.qd.sdu.edu.cn:7777/link/0261935EEB7A63D16C42D87E41E26B55",
                        repos: []
                    }, {
                        id: 4,
                        name: "2023年秋季课程",
                        enName: "Autumn class, 2023",
                        entry: "https://icloud.qd.sdu.edu.cn:7777/link/0261935EEB7A63D16C42D87E41E26B55",
                        repos: [{
                            name: "1015课堂讨论",
                            enName: "final project - 23/12/2023",
                            markdown: _("23projects")
                        }]
                    }],
                    references: [{
                        id: 0,
                        name: "Mastering the information age - solving problems with visual analytics",
                        translateName: "",
                        authors: "Daniel Keim, Jöm Kohlhammer, Geoffrey Ellis, Florian Mansmann",
                        pub: "Eurographics Association",
                        pubI18n: !1,
                        pubYear: 2010
                    }, {
                        id: 1,
                        name: "Introduction to Data Mining",
                        translateName: "数据挖掘导论（完整版）",
                        authors: "Pang-Ning Tang、Michael Steinbach、Vipin Kumar",
                        pub: "ptPress",
                        pubI18n: !0,
                        pubYear: 2011
                    }, {
                        id: 2,
                        name: "Mining of Massive Datasets",
                        translateName: "大数据（互联网大规模数据挖掘与分布式处理）",
                        authors: "Jure Leskovec, Anand Rajaraman, Jeffrey David Ullman",
                        pub: "ptPress",
                        pubI18n: !0,
                        pubYear: 2012
                    }, {
                        id: 3,
                        name: "Interactive data visualization",
                        translateName: "数据可视化实战（使用D3设计交互式图表）",
                        authors: "Scott Murray",
                        pub: "ptPress",
                        pubI18n: !0,
                        pubYear: 2013
                    }, {
                        id: 4,
                        name: "数据可视化",
                        translateName: "",
                        authors: "陈为、沈则潜",
                        pub: "phei",
                        pubI18n: !0,
                        pubYear: 2013
                    }]
                }
            }),
            b = a("37e1"),
            k = a.n(b),
            x = a("a925"),
            C = a("69c5"),
            S = a.n(C),
            A = a("9ef8"),
            T = a.n(A),
            D = a("edd4"),
            P = a("3504");
        a("dcad");

        function z(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, i)
            }
            return a
        }

        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? z(Object(a), !0).forEach((function(t) {
                    Object(i["a"])(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : z(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        n["default"].config.productionTip = !1, n["default"].use(x["a"]), n["default"].use(o.a);
        var j = new x["a"]({
            locale: "en",
            messages: {
                en: I(I({}, S.a), D),
                zh: I(I({}, T.a), P)
            }
        });
        g(j), new n["default"]({
            router: f,
            store: w,
            render: function(e) {
                return e(p)
            },
            i18n: j
        }).$mount("#app"), k.a.init()
    },
    "5b46": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("The setting for the 2012 VAST Challenges is BankWorld, a planet much like Earth, but with a very different geography. In fact, for this Challenge, we are dealing with one large land mass containing several different nation-states.")]), t("p", [e._v("The most important organization on BankWorld is the Bank of Money (BOM). BOM has many offices of various sizes across BankWorld. Each of these offices has many computers active throughout the day. In fact, we are dealing with about 1,000,000 machines.")]), t("p", [e._v("The Bank of Money (BOM) Corporate Information Officer (CIO) has assigned you to create a situation awareness visualization of the entire enterprise. This is a considerable challenge, considering that BOM operates from BankWorld's coast to coast. In addition to observing the global situation, he would also would like to be able to detect operational changes outside of the norm.")]), t("p", [e._v("You are provided with two datasets that span two days of data for BOM.\nOne dataset contains metadata about the bank’s network.\nThe second dataset contains periodic status reports from all computing equipment in the BOM enterprise.")]), t("p", [e._v("There is also one additional smaller dataset that contains a one hour snapshot of the enterprise's activities. It has the same format as the second dataset mentioned above, and can use the metadata contained in the first dataset.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Create a visualization of the health and policy status of the entire Bank of Money enterprise as of 2 pm BMT (BankWorld Mean Time) on February 2. What areas of concern do you observe?")])]), t("li", [t("p", [e._v("Use your visualization tools to look at how the network’s status changes over time. Highlight up to five potential anomalies in the network and provide a visualization of each. When did each anomaly begin and end? What might be an explanation of each anomaly?")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://www.vacommunity.org/VAST+Challenge+2012%3A+Challenge+Descriptions")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "5fbb": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Introduction")]), t("p", [e._v("Virtual reality (VR) is a computer-generated model of experiencing in which, although the surrounding is not real in the technical sense, they appear to be so. Creating immersive visualizations remains challenging, and often require complex low-level programming and tedious manual encoding of data attributes to geometric and visual properties.")]), t("p", [e._v("Advantages of VR for visual exploration:")]), t("ol", [t("li", [t("p", [e._v("More data visualization possibilities: many more dimensions than the traditional placement coordinates (X,Y, and Z) become available. It can even be classified according to direction or magnitude of a vector.")])]), t("li", [t("p", [e._v("Intuitive approach: the way VR will present data is the way we interact with the world at large.")])]), t("li", [t("p", [e._v("Multiple users: when data is presented in VR, multiple users can inhabit the environment at the same time.")])]), t("li", [t("p", [e._v("Eliminating distractions: with a user tapped into data presented in VR, their visual and to some extent aural senses are completely governed by the virtual environment.")])])]), t("p", [e._v("This project will be built on DXR toolkit. DXR is help developers efficiently specify visualization designs using a concise declarative visualization grammar inspired by Vega-Lite. A GUI is provided for easy and quick edits and previews of visualization designs in-situ. Reusable templates and customizable graphical marks are also provided to enable unique and engaging visualizations.")]), t("p", [e._v("A typical DXR toolkit system scenario is as below: (1) the designer describes the visualization design in a concise specification (vis-specs) using DXR’s high-level visualization grammar. (2) DXR then infers missing visualization parameters with sensible defaults. (3) Based on this complete specification, DXR then programmatically constructs the 3D visualization that the designer can place in a real or virtual immersive scene.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Run demos and examples in a VR environment.")])]), t("li", [t("p", [e._v("Summarize the shortcomings of visualizations in this toolkit and consider methods to improve them.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Reproduce the paper result (3-5 week)")])]), t("li", [t("p", [e._v("Find some patterns in a dataset (6-7 week)")])]), t("li", [t("p", [e._v("Conclude the shortcoming of the paper in VR scenarios (6-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Find a way to optimize the toolkit (9-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Implementation tools")]), t("ul", [t("li", [t("p", [e._v("DXR")])]), t("li", [t("p", [e._v("HTC Vive")])]), t("li", [t("p", [e._v("Unity Editor")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [t("p", [e._v("Paper: https://vcg.seas.harvard.edu/publications/dxr-a-toolkit-for-building-immersive-data-visualizations")])]), t("li", [t("p", [e._v("Source Code: https://github.com/ronellsicat/DxR")])]), t("li", [t("p", [e._v("Datasets:")]), t("ul", [t("li", [e._v("DXR Data (included in source): https://github.com/ronellsicat/DxR/tree/master/Assets/StreamingAssets/DxRData")]), t("li", [e._v("IATK Data: https://github.com/MaximeCordeil/IATK/tree/master/Assets/Datasets")])])])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "6f20": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("Mistford is a mid-size city located to the southwest of the Boonsong Lekagul Wildlife Preserve. The city has a small industrial area with four light-manufacturing endeavors. Mistford and the wildlife preserve are struggling with the possible endangerment of the Rose-Crested Blue Pipit, a locally loved bird. The bird’s nesting pairs seem to have decreased alarmingly, prompting an investigation last year implicating Kasios Office Furniture, a Mistford manufacturing firm. Since the initial investigation, the situation has evolved: Kasios insists that they have done nothing wrong! They assert that grad student Mitch Vogel and his professors are mere media-seekers trying to draw attention away from their lackadaisical research. Kasios presents itself as an extremely eco-friendly organization. They have launched their own very public investigation into the issues raised last year and are reporting very different results! It’s time to apply your visual analytics expertise to help illuminate the path to good science.")]), t("p", [e._v("The scenario for this challenge builds on last year’s but the challenges are new. Please see the VAST Challenge 2017 for additional background on this year's challenge! Readings from across the mini-challenges will help you with this year's effort. This year's scenario (the setting, the geography, the situation) are carried over to this year, however, you do not have to have participated in last year's challenge to work on this year's.")]), t("p", [e._v("In 2017, the VAST Challenge results suggested that the Kasios Furniture manufacturing company may have been a primary contributor to the apparent reduction of the number of nesting pairs of the Rose-Crested Blue Pipit, a favorite bird of Mistford residents and Boonsong Lekagul Nature Preserve visitors. Kasios supposedly used the banned substance Methylosmolene in their manufacturing process. They surreptitiously dumped process waste in the northeast region of the Preserve (mini-challenge 1 from 2017) and Methylosmolene was detected in their smokestack emissions (mini-challenge 2 from 2017).")]), t("p", [e._v("Kasios now claims that the analysis was flawed and biased. To combat these conclusions, Kasios has launched their own “investigation” into the Pipit situation, and they are now reporting that there are plenty of Rose-crested Blue Pipits happily living and nesting in the Preserve. To back up this claim, they have provided a set of Pipit bird calls, recently recorded across the Preserve, with locations of where they were recorded. Clearly, they claim, the Pipits are a thriving population, and Kasios will provide even more supporting evidence as their investigation proceeds.")]), t("p", [e._v("In last year’s Challenge, an ornithology grad student from Mistford College named Mitch Vogel discovered the plight of the Pipit and carried out an investigation. Normally, we would call on Mitch again to help validate Kasios’ claim. Unfortunately, Mitch is working far from Mistford in a remote area without internet access for an extended time and cannot be easily reached!")]), t("p", [e._v("The Pangera Ornithology Conservation Society, who sponsored Mitch last year, is at their wit’s end at what to do about this turn of events. The townsfolk and Preserve rangers seem satisfied that the recordings back up Kasios’ claims. Mistford College does not have another Pipit expert they can call upon for help. But, they do have a collection of bird calls from the Preserve that has been vetted by various ornithology groups as having accurate identifications. They have heard that new techniques from machine learning and visual analytics can be applied to situations like this. Perhaps, the calls could be classified and analyzed using these technologies, and reviewed when Mitch returns.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Using the bird call collection and the included map of the Wildlife Preserve, characterize the patterns of all of the bird species in the Preserve over the time of the collection. Please assume we have a reasonable distribution of sensors and human collectors providing the recordings, so that the patterns are reasonably representative of the bird locations across the area. Do you detect any trends or anomalies in the patterns?")])]), t("li", [t("p", [e._v("Turn your attention to the set of bird calls supplied by Kasios. Does this set support the claim of Pipits being found across the Preserve? A machine learning approach using the bird call library may help your investigation. What is the role of visualization in your analysis of the Kasios bird calls?")])]), t("li", [t("p", [e._v("Formulate a hypotheses concerning the state of the Rose Crested Blue Pipit. What are your primary pieces of evidence to support your assertion? What next steps should be taken in the investigation to either support or refute the Kasios claim that the Pipits are actually thriving across the Boonsong Lekagul Wildlife Preserve?")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://vacommunity.org/VAST+Challenge+2018+MC1")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "7f89": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("在nature上我们有很多论文的配图，这些配图我们很容易通过一些爬虫的技术来获取到。对于nature论文上的配图，我们可以分析他们有哪些特征，以及子类别下有什么共同趋势。例如"), t("a", {
                    attrs: {
                        href: "https://quickdraw.withgoogle.com/data"
                    }
                }, [e._v("Google Creative Lab")]), e._v("，提供了人们对物体的手绘。对于同一种物体，不同的人会有不同的绘制喜好。即使是同一个物体，可以按不同笔画数目进行分类，区别也非常明显。甚至于不同的国家的人，对绘制的偏好也有所不同。你是否可以以此为启发，对nature的论文配图做出类似的分析。")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [e._v("Web crawler")]), t("li", [e._v("Data annotation")]), t("li", [e._v("Feature Learning")]), t("li", [e._v("Clustering / Embedding")]), t("li", [e._v("Statistical analysis")]), t("li", [e._v("Visualization")])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("https://vast-challenge.github.io/2019/MC2.html")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    "9b3e": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("Challenges")]), t("p", [e._v("GraphChallenge seeks input from diverse communities to develop graph challenges that take the best of what has been learned from groundbreaking efforts such as "), t("a", {
                    attrs: {
                        href: "http://graphanalysis.org/benchmark/index.html"
                    }
                }, [e._v("GraphAnalysis")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://graph500.org/"
                    }
                }, [e._v("Graph500")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://firehose.sandia.gov/"
                    }
                }, [e._v("FireHose")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://mantevo.org/"
                    }
                }, [e._v("MiniTri")]), e._v(", and "), t("a", {
                    attrs: {
                        href: "http://graphblas.org/"
                    }
                }, [e._v("GraphBLAS")]), e._v(" to create a new set of challenges to move the community forward.")]), t("p", [e._v("[NEW] "), t("strong", [e._v("Sparse Deep Neural Network Graph Challenge")]), e._v(" This challenge performs neural network inference on a variety of sparse deep neural networks.")]), t("ul", [t("li", [e._v("Specification: "), t("a", {
                    attrs: {
                        href: "https://graphchallenge.mit.edu/sites/default/files/documents/SparseDNN-GraphChallenge-2019-09-01.pdf"
                    }
                }, [e._v("slides")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://arxiv.org/pdf/1909.05631"
                    }
                }, [e._v("paper")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://github.com/graphchallenge/GraphChallenge/tree/master/SparseDeepNeuralNetwork"
                    }
                }, [e._v("example serial code")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://graphchallenge.mit.edu/data-sets"
                    }
                }, [e._v("example data sets")])])]), t("p", [t("strong", [e._v("Static Graph Challenge: Subgraph Isomorphism")]), e._v(" This challenge seeks to identify a given sub-graph in a larger graph.")]), t("ul", [t("li", [e._v("Specification: "), t("a", {
                    attrs: {
                        href: "https://graphchallenge.mit.edu/sites/default/files/documents/SubGraphChallenge-2017-02-09.pdf"
                    }
                }, [e._v("slides")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://arxiv.org/abs/1708.06866"
                    }
                }, [e._v("paper")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://github.com/graphchallenge/GraphChallenge/tree/master/SubgraphIsomorphism"
                    }
                }, [e._v("example serial code")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://graphchallenge.mit.edu/data-sets#SNAPDatasets"
                    }
                }, [e._v("example data sets")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://graphchallenge.mit.edu/running-sample-code-amazon-ec2"
                    }
                }, [e._v("Amazon instructions")])])]), t("p", [t("strong", [e._v("Streaming Graph Challenge: Stochastic Block Partition")]), e._v(" This challenge seeks to identify optimal blocks (or clusters) in a larger graph.")]), t("ul", [t("li", [e._v("Specification: "), t("a", {
                    attrs: {
                        href: "https://graphchallenge.mit.edu/sites/default/files/documents/GraphPartitionChallenge-2017-03-27.pdf"
                    }
                }, [e._v("slides")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://arxiv.org/abs/1708.07883"
                    }
                }, [e._v("paper")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://github.com/graphchallenge/GraphChallenge/tree/master/StochasticBlockPartition"
                    }
                }, [e._v("example serial code")]), e._v(", "), t("a", {
                    attrs: {
                        href: "http://graphchallenge.mit.edu/data-sets#PartitionDatasets"
                    }
                }, [e._v("example data sets")]), e._v(", "), t("a", {
                    attrs: {
                        href: "https://graphchallenge.mit.edu/running-sample-code-amazon-ec2"
                    }
                }, [e._v("Amazon instructions")])])]), t("p", [e._v("Note on static versus streaming graph challenges. In static processing, given a large graph G the goal is to evaluate a function f(G). In stateless streaming, given an additional smaller graph g, the goal is to evaluate the function f(g). In stateful streaming, the goal is to evaluate a function f(G + g). Stateful streaming is the focus of the streaming graph challenge.")]), t("p", [e._v("Please use the following archival citations for the Graph Challenge when using the datasets and/or implementations made available via this Challenge:")]), t("p", [t("a", {
                    attrs: {
                        href: "https://doi.org/10.1109/HPEC.2019.8916336"
                    }
                }, [t("em", [e._v("Sparse Deep Neural Network Graph Challenge")])]), e._v(", Jeremy Kepner, Simon Alford, Vijay Gadepally, Michael Jones, Lauren Milechin, Ryan Robinett, Sid Samsi, IEEE HPEC, 2019")]), t("p", [t("em", [t("a", {
                    attrs: {
                        href: "https://doi.org/10.1109/HPEC.2017.8091039"
                    }
                }, [e._v("Static Graph Challenge: Subgraph Isomorphism")]), e._v(",")]), e._v(" Siddharth Samsi, Vijay Gadepally, Michael Hurley, Michael Jones, Edward Kao, Sanjeev Mohindra, Paul Monticciolo, Albert Reuther, Steven Smith, William Song, Diane Staheli, Jeremy Kepner, IEEE HPEC, 2017")]), t("p", [t("em", [t("a", {
                    attrs: {
                        href: "https://doi.org/10.1109/HPEC.2017.8091040"
                    }
                }, [e._v("Streaming Graph Challenge: Stochastic Block Partition")]), e._v(",")]), e._v(" Edward Kao, Vijay Gadepally, Michael Hurley, Michael Jones, Jeremy Kepner, Sanjeev Mohindra, Paul Monticciolo, Albert Reuther, Siddharth Samsi, William Song, Diane Staheli, Steven Smith, IEEE HPEC, 2017")]), t("p", [t("a", {
                    attrs: {
                        href: "https://doi.org/10.1109/IPDPSW.2016.89"
                    }
                }, [t("em", [e._v("PageRank Pipeline Benchmark: Proposal for a Holistic System Benchmark for Big-Data Platforms")])]), e._v(", Patrick Dreher, Chansup Byun, Chris Hill, Vijay Gadepally, Bradley Kuszmaul, Jeremy Kepner, IEEE IPDPSW, 2016")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    a2b5: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("Last year, the Kasios Furniture Company was implicated in environmental damage to the Boonsong Lekagul Wildlife Preserve for both dumping toxic waste and polluting the air with chemicals from its manufacturing process. But Kasios is not taking these accusations lying down, and they deny any accusation of industrial waste dumping! Kasios’ spokespersons state that there isn’t any ground contamination near the remote ranger station that was suggested by last year’s mini-challenge 1 and 3 participants, and they have inspected that area and found it as pristine as the rest of the preserve.")]), t("p", [e._v("Outraged ornithology professors from Mistford College journeyed out to look over the dumping site themselves and perform soil analyses. They returned to report that the site looked like there had been recent excavation and building activities going on. Boonsong Preserve rangers later confirmed that a new ranger station was being built at that site! Soil samples taken from the site were inconclusive in detecting Methylosmolene (the toxic manufacturing chemical in the suspected dumping) or any other contaminant, as new top soil had been trucked in.")]), t("p", [e._v("With a primary piece of evidence against Kasios now gone, investigators will need to take another approach. Professors in the Mistford College Hydrology Department have come forward with several years of water sensor readings from rivers and streams in the preserve. These samples were taken from different locations scattered throughout the area and contain measurements of several chemicals of possible interest, but they have never been analyzed due to lack of funding. Could visual analytics help reveal something in this data that could make up for the soil evidence that was destroyed?")]), t("p", [e._v("Your task is to investigate the hydrology data from across the Preserve. You are given a map of the Preserve (with the same base as last year’s challenge), with named sampling sites indicated on the map (the names have local significance, but are just mnemonics for your study) You are also provided with readings from each sampling station over time for several different chemicals and water properties.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [e._v("Characterize the past and most recent situation with respect to chemical contamination in the Boonsong Lekagul waterways. Do you see any trends of possible interest in this investigation?")]), t("li", [e._v("What anomalies do you find in the waterway samples dataset? How do these affect your analysis of potential problems to the environment? Is the Hydrology Department collecting sufficient data to understand the comprehensive situation across the Preserve? What changes would you propose to make in the sampling approach to best understand the situation?")]), t("li", [e._v("After reviewing the data, do any of your findings cause particular concern for the Pipit or other wildlife? Would you suggest any changes in the sampling strategy to better understand the waterways situation in the Preserve?")])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://vacommunity.org/VAST+Challenge+2018+MC2")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    a46c: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("p", [e._v("SEEDB: efficient data-driven visualization recommendations to support visual analytics. Vartak et al. VLDB 2015.")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    a4f1: function(e, t, a) {
        e.exports = a.p + "media/poetryVisualization.b29de4f8.mp4"
    },
    a5a9: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("目前，我国大气污染防治成效显著，这得益于我国逐渐完善的空气质量监测网。近年来，空气质量监测站收集到大量具有高维、时序特点的空气质量数据，如何利用此类数据，分析理解大气污染传输模式，并为决策者提供有效建议十分具有挑战性。利用大数据分析技术和可视化方法，能够分析大气污染问题及成因、监测大气污染发展趋势、分析大气污染的地域相关性，快速感知大气污染的时变规律，辅助工作人员因地制宜地制定防治策略。大数据可视分析与可视化将数据智能处理、视觉表征和交互分析有机地结合，使机器智能和人类智慧深度融合、优势互补，为大气污染防治工作的分析、指挥和决策提供有效手段和决策依据。第八届中国可视化与可视分析大会数据可视化竞赛向相关研究人员、高校师生、企业和数据可视分析爱好者、艺术家征集相关数据可视分析和艺术可视化作品。")]), t("h2", [e._v("Project Task")]), t("p", [e._v("参赛作品要求利用竞赛提供的2013–2018年中国高分辨率大气污染再分析开放数据集（http://naq.cicidata.top:10443/chinavis/opendata），利用可视分析技术与可视化方法，探索并发现空气质量大数据背后隐藏的模式和规律。该数据是覆盖全国范围的基于地理空间网格的空气质量再分析数据和对应的气象数据，包括六项常规污染物、风速、温度、气压、相对湿度和经纬度在内的13个属性（详细数据说明请登录开放数据集网站）。")]), t("ul", [t("li", [e._v("大气污染源分析：利用可视分析技术，识别主要大气污染源，分析关键污染成因。（可以根据自身情况联合其他数据辅助分析）")]), t("li", [e._v("大气污染时空态势分析：利用可视分析技术，分析大气污染时空分布模式、监控大气污染时空演变态势。")]), t("li", [e._v("大气污染传输模式分析：利用可视分析技术，比较各地大气污染物差异、大气污染传输模式、检测异常传输事件，制定传输防治策略。")]), t("li", [e._v("大气污染预测：利用可视分析技术，预测大气污染发展趋势、重污染天气预警。")]), t("li", [e._v("大气环境的改善：利用可视分析技术，展示大气污染治理过程中的大气环境状况、评估大气污染防治措施。")]), t("li", [e._v("自选主题，提炼分析需求，设置分析问题，并提供解决方案。")])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://www.chinavis.org/2021/challenge.html")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    ac5a: function(e, t, a) {
        "use strict";
        a("db7c")
    },
    adb6: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("Understanding Neural Networks Through Deep Visualization")]), t("blockquote", [t("p", [e._v("http://yosinski.com/deepvis")])]), t("h2", [e._v("201700181053 赵鑫鉴")]), t("ol", [t("li", [t("p", [e._v("根据image or video绘制卷积网络中每一层中神经元的激活值。在一个全连接的convnet中，位置是不重要的，因为任意两个神经元间都有权值传递。如此一来流过每一层网络的数据都可以进行可视化。eg. 将conv5的feature map转换成256个单独的13*13灰度图。")])]), t("li", [t("p", [e._v("文中引入了几种正则化方法，通过random hyper parameter search找到了work的正则化组合。")]), t("p", [e._v("paper中定义了一个参数正则化函数Re(x) penalizes images in various way。该网络在imagenet上训练，解决以下优化问题：$x^*=\\text{argmax}_x(ai(x)-Re(x))$，GD函数如下：$x \\leftarrow re(x+r(\\frac{\\partial ai}{\\partial x}))$。")]), t("p", [e._v("在四种不同的正则化下paper里进行了分析：")]), t("p", [e._v("L2 delay, Gaussian blur, Clipping with pixels with small norm, Clipping pixels with small norm 这四种正则方法都有益于可视化。四种正则化组合会有更好的效果，为了得到合适的权值与超参数，对300种可能做了random hyper parameter serach并选择出了四个能很好互补的组合。")]), t("p", [e._v("这篇paper的贡献在于有望通过可视化对大型神经网络的运行方式不再是完全的“黑盒”")])])]), t("h2", [e._v("201700122057 于志远")]), t("ol", [t("li", [t("p", [e._v("根据图像或视频绘制卷积网络中每一层中神经元的激活值。如果在一个全连接的神经网络中，顺序是不重要的，所以这些向量的图没有空间信息。但在卷积神经网络中，对于2D图像，过滤器以2D卷积的方式应用于图像的两个维度。")])]), t("li", [t("p", [e._v("本论文通过引入了几种正则化方法来对可视化进行优化：$x^"), t("em", [e._v("=\\text{argmax}(ai(x)-k_\\theta(x))$，当图像呈现给神经网络时，它会为某个单元$i$激活$a_i(x)$（i为所有运行单元的索引），$k_\\theta(x)$为一个定义的参数化正则函数$k_\\theta(x)$，$x^")]), e._v("$为我们所可视化的图像。梯度下降函数：$x\\leftarrow r_\\theta(x+r(\\frac{\\partial ai}{\\partial x}))$。")])]), t("li", [t("p", [e._v("下面四种正则化：")]), t("ol", [t("li", [e._v("L2衰减：$r_\\theta(x)=(1-\\theta_{dccay})\\cdot x$，防止极端像素求导图像（高振幅）")]), t("li", [e._v("高斯模糊：$r_\\theta(x)=GaussianBlur(x,\\theta_{b_width})$，惩罚高频信息（高频）")]), t("li", [e._v("以较小的范数修剪像素：使$r_\\theta(x)$计算范数，较小的设为0，来显示主要对象")]), t("li", [e._v("修剪贡献小的像素：去除对激活贡献小的像素，提高速度")])]), t("p", [e._v("可以通过以上4种方法的排列组合，能产生更好的可视化效果。为了获得一组合理的权重，论文使用了随机超参数搜索，确定了四个能很好互补的组合。")])])]), t("h2", [e._v("201700111085 李宜倬")]), t("p", [e._v("从某个初始输入$x=x_0$开始，计算此输入在某个单元i处引起的激活$a_i(x)$，然后沿着梯度$\\partial ai(x)/\\partial x$在输入空间中采取步骤，以合成引起单元i越来越高的激活的输入，最终终止于某个输入，此时$x^"), t("em", [e._v("$被认为是该单元的首选输入刺激。在输入空间是图像的情况下，可以直接显示$x^")]), e._v("$进行解释。")]), t("p", [e._v("通过正则化优化进行可视化，将网络的直接输入x视为零中心输入。")]), t("p", [e._v("查找$x^"), t("em", [e._v("=\\text{argmax}(ai(x)-k_\\theta(x))")]), e._v("$，有个问题是优化图像以引起高激活会产生无法识别的图像，所以要使用L2-正则化可以生成卷积最终层的稍微可辨别的图像。")]), t("p", [e._v("所以x0采用渐变步骤搜索x*，使用正则化运算符$r_\\theta$，而不是$R_\\theta$梯度。当步长为$\\eta$时，单个步骤为$x=r_\\theta(x+\\eta\\frac{\\partial ai}{\\partial x})$。")]), t("p", [e._v("而L2衰减实现$r_\\theta(x)=(1-\\theta_{decay})\\cdot x$（倾向于防止少数极端像素主导示例图）")]), t("p", [e._v("其他方法还有高斯模糊，以较小的范数修剪像素以及剪裁激活影响较小的像素。")]), t("h2", [e._v("201700272072 王耀宇")]), t("p", [e._v("深层神经网络被认为是黑匣子，内部运作难以理解。利用可视化以便更好地理解每个神经元所学的知识，从而更好地理解它所执行的计算。")]), t("p", [e._v("但是经过随机的图像处理的结果太差，无法识别，不具有实际价值，尤其是不经过正则化的图像。")]), t("p", [e._v("为了产生更多可识别的图像，研究人员尝试优化图像：")]), t("ol", [t("li", [e._v("最大程度激活神经元")]), t("li", [e._v("具有类似自然处理的样式")])]), t("p", [e._v("除此之外，有个非常有趣的现象：当对图像进行学习时，会自动学习某些信息，即使并不作为目标（利用可视化的方式可以看出），作为基础信息来辅助目标信息的识别或筛选。")]), t("p", [e._v("再此外，总结而来即为the Deep Visualization Toolbox工具箱提供了论文所述的功能，总结出了一个model可使用。")]), t("h2", [e._v("201705111123 孙维玮")]), t("ol", [t("li", [e._v("这篇论文尝试通过可视化展示CNN在图像识别的原理。")]), t("li", [e._v("不进行正则化合成图像可以很好骗过DNN，因此DNN的识别分布是远大于实际人类识别分布的，与该论文同年（2015），GoodFellow在ICLR上提出的FGSM与此后的NIPS神经网络攻防目的在于解决该问题。")]), t("li", [e._v("引入正则/先验可以从合成图像中看到部分识别物特征，说明DNN并不是没有真正提取出特征。用更强的先验获得更好的效果，我认为目的性过强的方法可能偏离了解神经网络的初衷。")]), t("li", [e._v("多层展示表明多层NN可以提取不同层次特征，随卷积层加深NN具有更大视野")]), t("li", [e._v("感觉这个问题本质是对抗NN，可视效果不好不是因为先验不足而是模型本身能力不强，采用GAN可能会得到极为清晰准确的合成图（GAN的CNN识别分布更小，能力更强）。")])]), t("h2", [e._v("201700150214 王玲雅")]), t("p", [e._v("通过激活DNN中的隐藏神经元合成图像")]), t("p", [e._v("输入要具有高激活性")]), t("p", [e._v("基于梯度的优化：")]), t("ol", [t("li", [e._v("从一个随机图像开始（随机地为每个像素选一个颜色）")]), t("li", [e._v("然后使用这个图像作为网络的输入来计算在网络中某个神经元引起的激活")]), t("li", [e._v("然后反向传递，计算当前的激活相对于网络中之前的激活的梯度")]), t("li", [e._v("反向传递结束时返回梯度，或如何改变每个像素的颜色，以增加神经元的激活（通过给图像的梯度增加一个小的分数实现）")]), t("li", [e._v("重复以上计算直到得到神经元高度激活的图像。")])]), t("p", [e._v("这些图像最大地激活了神经元，但没有经过自然图像的先验（如正则化）")]), t("p", [e._v("优化图像：")]), t("ol", [t("li", [e._v("最大程度地激活神经元")]), t("li", [e._v("使图像近似于自然图像（没有像素处于极值），这过程中使用的正则化：使用L2正则化和梯度优化会产生更好的图像，但增加了正则化仍会产生难以识别的图像。")])]), t("h2", [e._v("201700150100 季明珠")]), t("p", [e._v("没有经过正则化或预处理的可视神经元")]), t("ol", [t("li", [e._v("随机为每个像素点选取颜色")]), t("li", [e._v("Input->随机颜色的图像->进行向前传递：计算由图像xi造成的神经元激活ai(x)")])]), t("p", [e._v("进行反向传播：计算梯度（根据先前激活的神经元），最后得到梯度和如何改变像素颜色来提高神经元活性：$x=r_\\theta(x+\\eta\\frac{\\partial ai}{\\partial x})$，直到神经元高度激活")]), t("p", [e._v("进行弱正则化：进行弱正则化可能可以产生更为清晰的图像，由偶然产生的高激活神经元产生")]), t("p", [e._v("用更好的正则化/自然图像优先：会产生更为清晰的图像，使神经元被激发")]), t("h2", [e._v("201700210021 张圆圆")]), t("p", [e._v("图像和视觉领域的神经网络是一种对输入图像进行卷积、降维、机器学习等搭建起的进行信息捕捉和结构化处理的数学模型。之所以被称为神经网络，我觉得一方面是因为它的多层处理，另一方面是“图”结构化，并借鉴了生物中“神经元”定义。在尝试使用MATLAB调用2012.AlexNet神经网络中，约分成了20层处理，AlexNet库中已经完成对自然中上千个图像的特征提取，而对每一个新的输入图像就可以用这20层网络每层之间作一个数据处理/映射，通俗理解，也是降维的一种形式；最后一层给到这个图像最终所属类中。")]), t("p", [e._v("而本文中的DNN（深度神经网络）中，多次提到了正则化和神经元、在我的理解中，“正则化”对应降维，“神经元”对应特征点，这篇论文将神经网络“黑匣子”的内容进行神经元呈现，也就是把每一个类的最后特征提取进行展示，这些特征是每一个类（如火烈鸟）进行多层神经网络处理后留下的神经元/特征信息。有了这些信息，对新的图像进行预测等就会有一个不错的效果。")]), t("p", [e._v("正则化的目的在于可以降维泛化错误率/模型过拟合机率。就是限制神经元数量，因为过拟合的数据集是难以预测的。但同样，正则化的缺点是产生不自然图像，所以要以更好方式正则化产生更加可识别的可视效果。")]), t("h2", [e._v("201700150139 赵晓辉")]), t("p", [t("strong", [e._v("功能")]), e._v(" ：描述神经网络每一层的内部构造。")]), t("p", [t("strong", [e._v("可视化神经元做法")]), e._v(" ：通过给每个图像x增加 $\\alpha\\cdot\\partial ai(x)/\\partial x$ 的大小使得神经元i有着较高的激活率。")]), t("p", [e._v("为了防止神经元错误识别图像，我们将其正则化。在此，为了产生更多可识别的图像，我们以更好的方式正则化以可视化每一个神经元。")]), t("p", [e._v("在此，优化正则化的方法为，使用4种不同的正则化方法，将这4中方法进行组合，生成更加可识别的样本。")]), t("p", [t("strong", [e._v("可视化神经网络的所有层")]), e._v(" ：可视化神经网络的所有层，是将反应神经网络不同层的图像抽取出来，然后通过几个不同的随机梯度下降方向，对每一层的每一个要素进行可视化。")]), t("p", [e._v("可视化结果表明，高层的神经网络因为结合了低层神经网络的特征而变得更加复杂。")]), t("p", [t("strong", [e._v("深度可视化工具箱")]), e._v(" ：Deep Visualization Toolbox可让您通过向DNN提供图像(或实时网络摄像头图像)，观察每个神经元的反应来探测DNN。并且可以选择单个神经元以查看该神经元可视化效果。")]), t("h2", [e._v("201700210069 单宝迪")]), t("p", [e._v("众所周知，神经网络的普及与人们对他的了解，是不成正比的。换句话说，人们对于神经网络内部的实现过程知之甚少。因此，通过深度可视化（"), t("em", [e._v("Deep Visualization")]), e._v("），我们可以对神经网络有更明确地认识。")]), t("p", [e._v("为了更好的呈现结果，其构造了一个目标函数")]), t("p", [e._v("$x^*=arg_xmax(a_i(x)-R_\\theta(x))$")]), t("p", [e._v("于此同时，为了寻找使式子最大的$x$，得到我们要的可视化结果$x^*$,通过下式来更新$x$:")]), t("p", [e._v("$x\\leftarrow r_\\theta(x+\\eta\\frac{\\partial a_i}{\\partial x})$")]), t("p", [e._v("即通过正则化更新x.\n本文提出了四种正则化：\nL2 decay:这个正则化的思想就是通过 来惩罚大的值，排除一些极端像素。这些极端像素，也可以叫做噪声点，这些点对可视化没有用。")]), t("p", [e._v("Gaussian blur: 高斯模糊就是把某一点周围的像素色值按高斯曲线统计起来，采用数学上加权平均的计算方法得到这条曲线的色值，最后能够留下人物的轮廓，达到平滑的效果。这么做的思想是惩罚高频，这些高频引起高的激活值，但他们是既非现实的也非可理解的。")]), t("p", [e._v("Clipping pixels with small norm:前两种发表方法是抑制高振幅高频信息，留下来的图像包涵很多非零像素。这些非零像素会识别多个目标，而我们希望只识别主要的那个目标。因此我们的做法是设置个阈值，将小于阈值的像素置为零")]), t("p", [e._v("Clipping pixels with small contribution:计算出每个像素对激活值的贡献，即把像素x置为0 ，看激活值增加还是减少。即把第j个像素置为0。这中方法直观但效率特别低，实现起来非常慢，因此文中采用了一种近似的求解方法。梯度和x的内积，RGB三个通道相加，求绝对值，然后和阈值比较。")]), t("p", [e._v("将它们组合在一起可比以前的方法生成更多可识别的基于优化的样本。最后得到一组优化的图像，")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    b91a: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Classification in Cryo-Electron Tomograms")]), t("h4", [t("a", {
                    attrs: {
                        href: "http://www.shrec.net/"
                    }
                }, [e._v("SHREC 2020")]), e._v(" Track")]), t("h5", [e._v("Motivation")]), t("p", [e._v("There is a noticeable gap in knowledge about the organization of cellular life at the mesoscopic level. With the advent of the direct electron detectors and the associated resolution revolution, cryo-electron tomography (cryo-ET) has the potential to bridge this gap by simultaneously visualizing the cellular architecture and structural details of macromolecular assemblies, thee-dimensionally. The technique offers insights in key cellular processes and opens new possibilities for rational drug design. However, the biological samples are radiation sensitive, which limits the maximal resolution and signal-to-noise ratio. Innovation in computational methods remains key to derive biological information from the tomograms.")]), t("h5", [e._v("Task")]), t("p", [e._v("In this SHREC track, we propose a task of localization and classification of biological particles in the cryo-electron tomogram volume. We provide physics-based simulation of cryo-electron tomograms and annotations for all of them except the test tomogram. We hope that this will enable researchers to try out different methods, including machine learning and statistical approaches. All 3D object retrieval and 3D electron microscopy experts interested in computational cryo-ET are welcome to participate.")]), t("h5", [e._v("Dataset")]), t("p", [e._v("To provide participants with as accurate ground truth information as possible, we have created a physics-based simulator to generate cryo-electron tomograms.")]), t("p", [e._v("The dataset consists of 10 tomograms, with 1nm/voxel resolution, with a size of 512x512x512 voxels. Each tomogram is packed with on average 2500 bio-particles of 12 uniformly distributed and rotated different proteins, various in size and structure, with the following "), t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/"
                    }
                }, [e._v("PDB")]), e._v(" identificators:")]), t("ul", [t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/1bxn"
                    }
                }, [e._v("1bxn")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/1qvr"
                    }
                }, [e._v("1qvr")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/1s3x"
                    }
                }, [e._v("1s3x")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/1u6g"
                    }
                }, [e._v("1u6g")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/2cg9"
                    }
                }, [e._v("2cg9")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/3cf3"
                    }
                }, [e._v("3cf3")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/3d2f"
                    }
                }, [e._v("3d2f")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/3gl1"
                    }
                }, [e._v("3gl1")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/3h84"
                    }
                }, [e._v("3h84")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/3qm1"
                    }
                }, [e._v("3qm1")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/4cr2"
                    }
                }, [e._v("4cr2")])]), t("li", [t("a", {
                    attrs: {
                        href: "https://www.rcsb.org/structure/4d8q"
                    }
                }, [e._v("4d8q")])])]), t("p", [e._v("For each tomogram but the test one, we also provide:")]), t("ol", [t("li", [e._v("Ground truth volume")]), t("li", [e._v("Ground truth tilt angle projections (using which the tomogram was constructed)")]), t("li", [e._v("Noise-free ground truth volume (ground truth without water and structural noise)")]), t("li", [e._v("Noise-free ground truth tilt angle projections")]), t("li", [e._v("Text file with locations and PDB ID of each particle")]), t("li", [e._v("Occupancy volumes (where each voxel contains particle ID of the particle (w.r.t. text file) or 0 if that’s not a particle)")]), t("li", [e._v("Class mask volumes (where each voxel contains class ID of the particle (w.r.t. text file) or 0 if that's not a particle)")])]), t("p", [e._v("Dataset also includes Python code examples of data loading and a README file with more detailed information.\n"), t("strong", [e._v("Contest")]), e._v(" dataset has 9 annotated tomograms and 1 test tomogram.\n"), t("strong", [e._v("Full")]), e._v(" dataset has 10 annotated tomograms.\n"), t("strong", [e._v("Diff")]), e._v(" dataset contains only the difference between full and contest dataset.")])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    c6fb: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Introduction")]), t("p", [e._v("情感分析是自然语言处理领域的热点研究问题，主要思想是通过对自然语句进行一系列处理，获取该语句的情感倾向，挖掘深层信息。在互联网已经广泛普及的现代社会，每天出现在互联网上的评论信息数以亿计，如果能对如此庞大的信息数据集加以有效利用，将产生很高的社会效益。情感分析通常在词的维度上进行。首先需要对相关文本进行分词处理，然后根据已有的情感字典，对分好的词语经过相关模型的一系列处理，得到一个有关该文本的情感分析结果。目前经常用来进行情感分析的模型有Naive Bayes、SVM、Logistic Regression等。")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("针对网络上已有的语料信息，使用经典结构模型，对语料进行情感分析，使得训练后的模型能够有效对新输入的语料进行情感的判别。")])]), t("li", [t("p", [e._v("尝试对经典模型进行优化，使结果更准确。鼓励使用deep learning相关结构来考虑。")])])]), t("h2", [e._v("Schedule")]), t("p", [e._v("第2周：中秋节放假")]), t("p", [e._v("第3-4周：搭建所需环境python+TensorFlow，推荐使用pyCharm作为集成开发环境，了解python和TensorFlow框架的使用。")]), t("p", [e._v("第5周：国庆节放假")]), t("p", [e._v("第6-8周：尝试搭建经典模型，选定一个数据集进行训练，并给出训练后的测试结果。")]), t("p", [e._v("第9-10周：对多个经典模型(至少3个)进行评估，给出评估指标，作为今后优化的依据。")]), t("p", [e._v("第11-13周：尝试对模型进行优化，或者设计自己的模型（推荐deep learning相关知识）")]), t("p", [e._v("第14-15周：结果汇总，制作报告，撰写论文")]), t("p", [e._v("第16-17周：presentation")]), t("h2", [e._v("Resources")]), t("ul", [t("li", [t("p", [e._v("简易版教程与demo：https://github.com/aditya-xq/Text-Emotion-Detection-Using-NLP")])]), t("li", [t("p", [e._v("数据集：")]), t("ul", [t("li", [e._v("微博情感分析测评数据：https://pan.baidu.com/s/1psjysSXpKOEb1ciem7DsRw 密码：7hb4")]), t("li", [e._v("中文对话情绪语料：https://github.com/xxxspy/Chinese_conversation_sentiment")])])]), t("li", [t("p", [e._v("相关文献：")]), t("ul", [t("li", [e._v("文本情感分类：https://pdfs.semanticscholar.org/c804/78e361ed8f5fd5400fdbd4f6a6f37a2e4b57.pdf")]), t("li", [e._v("deep learning与情感分析：https://link.springer.com/content/pdf/10.1007%2Fs13042-018-0799-4.pdf")])])]), t("li", [t("p", [e._v("安装教程：")]), t("ul", [t("li", [e._v("Anaconda3(python环境管理器)安装教程：https://www.jianshu.com/p/026a2c43b081")]), t("li", [e._v("pyCharm安装及配置教程：https://www.runoob.com/w3cnote/pycharm-windows-install.html")])])])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    c884: function(e, t, a) {
        var i = {
            "./191015disscussion.md": "adb6",
            "./23projects.md": "47f5",
            "./AR.md": "d7b9",
            "./CCET.md": "b91a",
            "./ChinaVis2021.md": "a5a9",
            "./ChinaVis2022.md": "517e",
            "./GraphChallenge.md": "9b3e",
            "./Nature.md": "7f89",
            "./SEEDB.md": "a46c",
            "./SocialNetworkAnalysis.md": "40f3",
            "./VAST2012.md": "5b46",
            "./VAST2014.md": "d308",
            "./VAST2015.md": "d6be",
            "./VAST2016.md": "38a8",
            "./VAST2018.md": "6f20",
            "./VAST2018_2.md": "a2b5",
            "./VAST2019.md": "46c4",
            "./VAST2021.md": "53fe",
            "./VAST2022.md": "0735",
            "./VAST2023.md": "ecc2",
            "./VR.md": "5fbb",
            "./business.md": "0f23",
            "./openpose.md": "5072",
            "./sentiment.md": "c6fb",
            "./大气污染时空经济效益可视分析.md": "fd53",
            "./大规模科学数据可视分析系统.md": "dbe6"
        };

        function n(e) {
            var t = s(e);
            return a(t)
        }

        function s(e) {
            if (!a.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return i[e]
        }
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = s, e.exports = n, n.id = "c884"
    },
    d308: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("In the roughly twenty years that Tethys-based GAStech has been operating a natural gas production site in the island country of Kronos, it has produced remarkable profits and developed strong relationships with the government of Kronos. However, GAStech has not been as successful in demonstrating environmental stewardship.")]), t("p", [e._v("In January, 2014, the leaders of GAStech are celebrating their new-found fortune as a result of the initial public offering of their very successful company. In the midst of this celebration, several employees of GAStech go missing. An organization known as the Protectors of Kronos (POK) is suspected in the disappearance, but things may not be what they seem.")]), t("p", [e._v("Many of the Abila, Kronos-based employees of GAStech have company cars which are approved for both personal and business use. Those who do not have company cars have the ability to check out company trucks for business use, but these trucks cannot be used for personal business.")]), t("p", [e._v("Employees with company cars are happy to have these vehicles, because the company cars are generally much higher quality than the cars they would be able to afford otherwise. However, GAStech does not trust their employees. Without the employees’ knowledge, GAStech has installed geospatial tracking software in the company vehicles. The vehicles are tracked periodically as long as they are moving.")]), t("p", [e._v("This vehicle tracking data has been made available to law enforcement to support their investigation. Unfortunately, data is not available for the day the GAStech employees went missing. Data is only available for the two weeks prior to the disappearance.")]), t("p", [e._v("In addition to the vehicle data, law enforcement has been given access to the personal and business credit and debit card transactions for the local GAStech employees for the two weeks preceding the kidnapping. Many of the GAStech employees also use loyalty cards to gain discounts or extra benefits at the businesses they patronize, and law enforcement has been given access to two weeks of this loyalty card data as well.")]), t("p", [e._v("As a visual analytics expert assisting law enforcement, your mission is to make sense of this data to identify suspicious patterns of behavior and to prioritize which of these may be related to the missing staff members. You must cope with uncertainties that result from missing, conflicting, and imperfect data to make recommendations for further investigation.")]), t("p", [e._v("Use visual analytics to analyze the available data and develop responses to the questions below. In addition, prepare a video that shows how you used visual analytics to solve this challenge. Submission instructions are available here. Entry forms are available for download below.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Describe common daily routines for GAStech employees. What does a day in the life of a typical GAStech employee look like?")])]), t("li", [t("p", [e._v("Identify up to twelve unusual events or patterns that you see in the data. If you identify more than twelve patterns during your analysis, focus your answer on the patterns you consider to be most important for further investigation to help find the missing staff members. For each pattern or event you identify, describe")]), t("ul", [t("li", [t("p", [e._v("What is the pattern or event you observe?")])]), t("li", [t("p", [e._v("Who is involved?")])]), t("li", [t("p", [e._v("What locations are involved?")])]), t("li", [t("p", [e._v("When does the pattern or event take place?")])]), t("li", [t("p", [e._v("Why is this pattern or event significant?")])]), t("li", [t("p", [e._v("What is your level of confidence about this pattern or event? Why?")])])])]), t("li", [t("p", [e._v("Like most datasets, the data you were provided is imperfect, with possible issues such as missing data, conflicting data, data of varying resolutions, outliers, or other kinds of confusing data. Considering MC2 data is primarily spatiotemporal, describe how you identified and addressed the uncertainties and conflicts inherent in this data to reach your conclusions in questions MC2.1 and MC2.2.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://www.vacommunity.org/VAST+Challenge+2014%3A+Mini-Challenge+2")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    d6be: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Challenge Descriptions")]), t("p", [e._v("DinoFun World is a typical modest-sized amusement park, sitting on about 215 hectares and hosting thousands of visitors each day. It has a small town feel, but it is well known for its exciting rides and events.")]), t("p", [e._v("One event last year was a weekend tribute to Scott Jones, internationally renowned football (“soccer,” in US terminology) star. Scott Jones is from a town nearby DinoFun World. He was a classic hometown hero, with thousands of fans who cheered his success as if he were a beloved family member. To celebrate his years of stardom in international play, DinoFun World declared “Scott Jones Weekend”, where Scott was scheduled to appear in two stage shows each on Friday, Saturday, and Sunday to talk about his life and career. In addition, a show of memorabilia related to his illustrious career would be displayed in the park’s Pavilion.")]), t("p", [e._v("However, the event did not go as planned. Scott’s weekend was marred by crime and mayhem perpetrated by a poor, misguided and disgruntled figure from Scott’s past.")]), t("p", [e._v("While the crimes were rapidly solved, park officials and law enforcement figures are interested in understanding just what happened during that weekend to better prepare themselves for future events. They are interested in understanding how people move and communicate in the park, as well as how patterns changes and evolve over time, and what can be understood about motivations for changing patterns.")]), t("p", [e._v("You have access to movement tracking information for all of the paying park visitors over the three days of the Scott Jones celebration. This data contains many patterns that are useful for planning park operations. On this particular weekend a crime occurred and the data likely contains information pertinent to that crime.")]), t("p", [e._v("Use visual analytics to analyze the available data and develop responses to the questions below. In addition, prepare a video that shows how you used visual analytics to solve this challenge. We encourage novel visual representations and analytic approaches!")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Characterize the attendance at the park on this weekend. Describe up to twelve different types of groups at the park on this weekend.")]), t("ul", [t("li", [e._v("How big is the group type?")]), t("li", [e._v("Where does this type of group like to go in the park?")]), t("li", [e._v("How common is this type of group?")]), t("li", [e._v("What are your other observations about this type of group?")]), t("li", [e._v("What can you infer about the group?")]), t("li", [e._v("If you were to make one improvement to the park to better meet this group’s needs, what would it be?")])])]), t("li", [t("p", [e._v("Are there notable differences in the patterns of activity on in the park across the three days? Please describe the notable difference you see.")])]), t("li", [t("p", [e._v("What anomalies or unusual patterns do you see? Describe no more than 10 anomalies, and prioritize those unusual patterns that you think are most likely to be relevant to the crime.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Fetch Dataset, analyse tasks, and make a plan to solve it (2-3 week)")])]), t("li", [t("p", [e._v("Process data, implement analysis framework (4-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Implement analysis system (9-12 week)")])]), t("li", [t("p", [e._v("Inter-team evaluation and modification (13-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [e._v("http://www.vacommunity.org/2015+VAST+Challenge%3A+MC1")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    d7b9: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Introduction")]), t("p", [e._v("Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real-world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities. Creating immersive visualizations remains challenging, and often require complex low-level programming and tedious manual encoding of data attributes to geometric and visual properties.")]), t("p", [e._v("Advantages of AR for visual exploration:")]), t("ol", [t("li", [t("p", [e._v("More data visualization possibilities: many more dimensions than the traditional placement coordinates (X,Y, and Z) become available. It can even be classified according to direction or magnitude of a vector.")])]), t("li", [t("p", [e._v("Intuitive approach: the way AR will present data is the way we interact with the world at large.")])]), t("li", [t("p", [e._v("Multiple users: when data is presented in AR, multiple users can inhabit the environment at the same time.")])]), t("li", [t("p", [e._v("Eliminating distractions: with a user tapped into data presented in AR, their visual and to some extent aural senses are completely governed by the virtual environment.")])])]), t("p", [e._v("This project will be built on DXR toolkit. DXR is help developers efficiently specify visualization designs using a concise declarative visualization grammar inspired by Vega-Lite. A GUI is provided for easy and quick edits and previews of visualization designs in-situ. Reusable templates and customizable graphical marks are also provided to enable unique and engaging visualizations.")]), t("p", [e._v("A typical DXR toolkit system scenario is as below: (1) the designer describes the visualization design in a concise specification (vis-specs) using DXR’s high-level visualization grammar. (2) DXR then infers missing visualization parameters with sensible defaults. (3) Based on this complete specification, DXR then programmatically constructs the 3D visualization that the designer can place in a real or virtual immersive scene.")]), t("h2", [e._v("Project Task")]), t("ul", [t("li", [t("p", [e._v("Run demos and examples in an AR environment.")])]), t("li", [t("p", [e._v("Summarize the shortcomings of visualizations in this toolkit and consider methods to improve them.")])])]), t("h2", [e._v("Schedule")]), t("ul", [t("li", [t("p", [e._v("Reproduce the paper result (3-5 week)")])]), t("li", [t("p", [e._v("Find some patterns in a dataset (6-7 week)")])]), t("li", [t("p", [e._v("Conclude the shortcoming of the paper in AR scenarios (6-7 week)")])]), t("li", [t("p", [e._v("Mid-term inspection (8 week)")])]), t("li", [t("p", [e._v("Find a way to optimize the toolkit (9-15 week)")])]), t("li", [t("p", [e._v("Final inspection (16-17 week)")])])]), t("h2", [e._v("Implementation tools")]), t("ul", [t("li", [t("p", [e._v("DXR")])]), t("li", [t("p", [e._v("HoloLens")])]), t("li", [t("p", [e._v("HoloToolkit (included in DXR source)")])]), t("li", [t("p", [e._v("Unity Editor")])])]), t("h2", [e._v("Resources")]), t("ul", [t("li", [t("p", [e._v("Paper: https://vcg.seas.harvard.edu/publications/dxr-a-toolkit-for-building-immersive-data-visualizations")])]), t("li", [t("p", [e._v("Source Code: https://github.com/ronellsicat/DxR")])]), t("li", [t("p", [e._v("Datasets:")]), t("ul", [t("li", [e._v("DXR Data (included in source): https://github.com/ronellsicat/DxR/tree/master/Assets/StreamingAssets/DxRData")]), t("li", [e._v("IATK Data: https://github.com/MaximeCordeil/IATK/tree/master/Assets/Datasets")])])])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    db7c: function(e, t, a) {},
    dbe6: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("大规模科学数据可视分析系统")]), t("p", [e._v("https://is.muni.cz/th/vw5er/thesis.pdf#page=39")]), t("h2", [e._v("LiteMol Suite")]), t("p", [e._v("Given rapid advances in electron microscopy and other techniques\nfor determining macromolecular structure, many structures that\nwere previously intractable on account of their size and complexity\nare now amenable to study at the molecular level.")]), t("h2", [e._v("Mol* Viewer")]), t("p", [e._v("Mol* Viewer can visualize markedly larger molecular systems than\nother currently available web visualization tools.")]), t("h2", [e._v("References")]), t("ul", [t("li", [e._v("Mol* Viewer: modern web app for 3D visualization\nand analysis of large biomolecular structures")]), t("li", [e._v("LiteMol suite: interactive web-based visualization of\nlarge-scale macromolecular structure data")]), t("li", [e._v("BinaryCIF and CIFTools— Lightweight, efficient and\nextensible macromolecular data management.")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    ecc2: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h1", [e._v("VAST Challenge 2023")]), t("h2", [e._v("Background")]), t("ul", [t("li", [e._v("Seafood is one of the most widely traded commodities in the\nglobal food market. More than a third of the world’s\npopulation relies on fish and other seafood as a primary\nsource of protein in their diet, and an estimated 520 million\npeople make their livelihoods through fishing or fishingrelated activities.")]), t("li", [e._v("Unfortunately, illegal, unreported, and unregulated fishing\nis a major contributor to overfishing worldwide. These\nactivities pose a threat not only to fragile marine ecosystems,\nbut also to food security in coastal communities and\nregional stability more broadly. The illegal fishing trade has\nbeen linked to organized crime, and human rights violations\nare common when fishing operations are conducted without\nregulatory oversight.")])]), t("h2", [t("strong", [e._v("Mini Challenge I")])]), t("h3", [e._v("Contextualize Data")]), t("ul", [t("li", [e._v("Analysts at FishEye International are committed to stopping\nillegal, unreported, and unregulated (IUU) fishing and\nprotecting marine species that are affected by it.")]), t("li", [e._v("As part of their work, FishEye collects online news articles\nabout fishing, marine industry, and international maritime\ntrade.")]), t("li", [e._v("To facilitate their analysis, FishEye uses a natural language\nprocessing tool to extract the names of entities (people and\nbusinesses) and the relationships between them.")]), t("li", [e._v("Can you help them make sense of the extracted data?")])]), t("ol", [t("li", [e._v("Use visual analytics to dynamically display and explore context around the\nsuspected entities listed above. What did you learn about each one? Can you\nconnect them to illegal fishing? Provide evidence for or against the case that each\nentity is involved in illegal fishing and use visual analytics to express confidence in\nyour conclusions. Limit your response to 600 words and 6 images.")]), t("li", [e._v("Use your visual analytics tool to compare and contrast what you learned about\nthe suspect entities. Are there patterns that may indicate illegal activity? Use visual\nanalytics to express confidence that a pattern exists and where uncertainty may be\naffecting this confidence. Limit your response to 400 words and 4 images.")]), t("li", [e._v("What other companies should FishEye investigate for illegal fishing? Show how\nyour visual analytics can be used to find entities that are worthy of further\ninvestigation. Limit your response to 600 words and 6 images.")]), t("li", [e._v("Reflection: What was the most difficult aspect of working with this knowledge\ngraph? Did you have the tools and resources you needed to complete the challenge?\nWhat additional resources would have helped you? Limit your response to 300\nwords")])]), t("h3", [e._v("Mini Challenge II")]), t("ul", [t("li", [e._v("The country of Oceanus has sought FishEye International’s help in identifying companies\npossibly engaged in illegal, unreported, and unregulated (IUU) fishing. As part of the\ncollaboration, FishEye’s analysts received import/export data for Oceanus’ marine and\nfishing industries. However, Oceanus has informed FishEye that the data is incomplete.")]), t("li", [e._v("To facilitate their analysis, FishEye transformed the trade data into a knowledge graph.\nUsing this knowledge graph, they hope to understand business relationships, including\nfinding links that will help them stop IUU fishing and protect marine species that are\naffected by it. FishEye analysts found that node-link diagrams gave them a good high-level\noverview of the knowledge graph. However, they are now looking for visualizations that\nprovide more detail about patterns for entities in the knowledge graph.")]), t("li", [e._v("First, FishEye knows from past experience that companies caught fishing illegally will\nshut down but will then often start up again under a different name.")]), t("li", [e._v("Second, FishEye has been using several tools, including artificial intelligence, to\nreason on the knowledge graph and suggest links that could extend the dataset.\nMini Challenge II")])]), t("ol", [t("li", [e._v("Use visual analytics to identify temporal patterns for individual entities and between\nentities in the knowledge graph FishEye created from trade records. Categorize the\ntypes of business relationship patterns you find. Limit your response to 600 words and 6\nimages.")]), t("li", [e._v("Evaluate the sets of predicted knowledge graph links FishEye has provided using\nvisual analytics. Which sets are most reliable for completing the graph? Limit your\nresponse to 600 words and 6 images.")]), t("li", [e._v("Illustrate how your visual analytics approach can be used to identify new patterns\nand/or anomalies that are present in the knowledge graph after you have added the\nlinks you deemed reliable in question 2. Limit your response to 300 words and 4 images.")]), t("li", [e._v("Identify companies that fit a pattern of illegal fishing. Use visualizations to support\nyour conclusions and your confidence in them. Limit your response to 300 words and 4\nimages.")]), t("li", [e._v("Reflection: What was the most difficult aspect of working with this knowledge graph?\nDid you have the tools and resources you needed to complete the challenge? What\nadditional resources would have helped you? Limit your response to 300 words")])]), t("h3", [e._v("Mini Challenge III")]), t("p", [e._v("FishEye International, a non-profit focused on countering illegal, unreported, and unregulated\n(IUU) fishing, has been given access to an international finance corporation’s database on\nfishing related companies. In the past, FishEye has determined that companies with\nanomalous structures are far more likely to be involved in IUU (or other “fishy” business).\nFishEye has transformed the database into a knowledge graph. It includes information about\ncompanies, owners, workers, and financial status. FishEye is aiming to use this graph to\nidentify anomalies that could indicate a company is involved in IUU.\nFishEye analysts have attempted to use traditional node-link visualizations and standard\ngraph analyses, but these were found to be ineffective because the scale and detail in the data\ncan obscure a business’s true structure. Can you help FishEye develop a new visual analytics\napproach to better understand fishing business anomalies?\nMini Challenge III")]), t("ol", [t("li", [e._v("Use visual analytics to identify anomalies in the business groups present in the knowledge\ngraph. Limit your response to 400 words and 5 images.")]), t("li", [e._v("Develop a visual analytics process to find similar businesses and group them. This analysis\nshould focus on a business’s most important features and present those features clearly to the\nuser. Limit your response to 400 words and 5 images.")]), t("li", [e._v("Measure similarity of businesses that you group in the previous question. Express confidence\nin your groupings visually. Limit your response to 400 words and 4 images.")]), t("li", [e._v("Based on your visualizations, provide evidence for or against the case that anomalous\ncompanies are involved in illegal fishing. Which business groups should FishEye investigate\nfurther? Limit your response to 600 words and 6 images.")]), t("li", [e._v("Reflection: What was the most difficult aspect of working with this knowledge graph? Did you\nhave the tools and resources you needed to complete the challenge? What additional\nresources would have helped you? Limit your response to 300 words\nGrand Challenge\nFishEye International is committed to using all resources available to it to stop illegal,\nunreported, and unregulated (IUU) fishing. Each of the data sources available to FishEye that\nare outlined in Mini-challenges 1, 2, and 3 provide clues to identify companies that could be\nengaged in IUU fishing, but no single source provides a complete picture.\nFuse the knowledge graph data from the three sources together to give Fisheye’s analysts a\nmore comprehensive picture.\nEach data source may lead investigators to a different conclusion and FishEye is interested in\nusing visual analytics to highlight conflicting narratives across datasets.")])]), t("h3", [e._v("Grand Challenge")]), t("ol", [t("li", [e._v("Fuse data from the 3 mini-challenges together into a single knowledge graph. Create\nvisualizations that highlight the extent to which data sources overlap and how each data\nsource is connected to the others. Limit your responses to 300 words and 5 images.")]), t("li", [e._v("The data from each source has limitations, which can result in an incomplete picture for\nmost entities. Use visual analytics to quantify completeness of the knowledge graph and\nto highlight entities or networks that are important to the overall fishing network and\nwould benefit from additional data. Limit your responses to 500 words and 8 images.")]), t("li", [e._v("Use visual analytics to identify information presented in one data source that is in\nconflict with data in another source. Place special emphasis on the narratives that arise\nfrom networks of entities when completing your analysis. Limit your responses to 800\nwords and 10 images.")]), t("li", [e._v("Identify a group of entities that you believe is involved in IUU fishing and use\nvisualizations to present evidence of their behaviors. Limit your responses to 1000 words\nand 12 images.")]), t("li", [e._v("Reflection: What was the most difficult aspect of working with this knowledge graph?\nDid you have the tools and resources you needed to complete the challenge? What\nadditional resources would have helped you? Limit your response to 300 words")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    },
    edd4: function(e) {
        e.exports = JSON.parse('{"bigdataTitle":"Big Data Analysis and Practice","homePage":"Home","projectList":"Projects","resultList":"Demos","courseResources":"Resources","courseEntries":"Classroom","courseEntriesHint":"(Only for students in class)","location":"Shandong University","courseIntro":"Introduction","courseIntroContent":"In the era of Big Data, discovering the characteristics behind the data and using them has become the mainstream thinking in current business operations. In the course of Big Data Analysis and Practice, students will systematically learn the specific process of scientific research work, combined with specific fields, such as computer vision, natural language processing, virtual reality, etc. To fully explore the characteristics of massive data, complete a specific project, innovate mainstream algorithms, and finally complete a high-quality paper, so as to cultivate students\' abilities in discovering problems, acquiring knowledge, document retrieval, and algorithm optimization.","courseDesc":"Course Description","courseDescContent":"Practices on Data Analysis is one of the most important course in the major of Data Science and Technology. Students will be able to build a complete knowledge on data management, data analysis, data mining, data visualization and human-computer interaction. This course will be driven by experiments, which will strengthen understandings of fundamental theories, cultivate the ability to solve complex engineering problems by using multi-cross disciplines (e.g., Mathematics, Natural Science, Engineering, etc.), and the research ability to solve problems.","aims":"Teaching Objectives","aims1":"This course will focus on the needs of interactive data processing and analysis, and will comprehensively teach theoretical knowledge and practical operational capabilities in data processing, data mining, data analysis, and data visualization.","aims2":"In terms of theoretical knowledge, based on the current advanced data interactive system and the theoretical basis of technical explanations, discuss how to improve the performance of the next-generation data processing system through interactive technology, and how to give the data processing system interactive analysis and decision-making capabilities. It mainly describes the theoretical basis and common knowledge of data management, data mining, data visualization, etc.","aims3":"As for practical operation, it is guided by comprehensive scientific research topics, guiding students to make practical contributions in the topic research, and guiding interested students to participate in the National University Big Data Application Innovation Competition. Scientific research topics include but are not limited to: exploration in AR and VR; commercial visualization analysis; text sentiment analysis; two-dimensional human skeleton body posture estimation. In terms of evaluation, the proportion of actual operation ability scores will be increased, and the training of students\' scientific research ability and practical ability will be emphasized.","request":"Goals","requestContent":"Through the study of this course, the following abilities will be cultivated:","requestContent1":"Engineering knowledge. Through the study of this course, students have a solid theoretical foundation of data mining and data visualization, and through practical teaching links such as big data visualization analysis and application innovation, students will eventually have the basic ability to develop big data application systems.","requestContent2":"Comprehensive application capabilities. Students understand the interrelationships of data management, data analysis, data mining, data visualization, and human-computer interaction, and can grasp the overall method and architecture when designing and implementing big data application innovation systems, and complete high-quality design and development.","requestContent3":"Research capacity. Add cutting-edge research content of data mining and data visualization to the teaching content, and improve students\' ability to ask questions, solve problems, and analyze problems through practical projects. At the end of the semester, each student is required to submit a research essay (4 pages + 1 reference）。","requestContent4":"Communication skills. Through group communication, classroom report, report writing, etc., students\' communication skills are cultivated, so that students can quickly acquire new knowledge and new information. Students are required to report their research progress in the middle and at the end of the semester.","reference":"Reference Materials","authors":"Authors","pub":"Press","pubYear":"Publication year","ptPress":"The People\'s Posts and Telecommunications Press","phei":"Publishing House of Electronics Industry","noResult":"No demo found","fetching":"Fetching file list...","fileName":"File Name","url":"URL","teacherAndTA":"Teacher and TAs","LOT":"List of Topics Covered","week":"Week","date":"Date","topic":"Topic","grading":"Course Grading","task":"Task","paperPres":"Middle-Term Presentation","paperPresDesc":"choose a most relevant reference to your project","finalProject":"Final Project","paperWriting":"Paper Writing","pages":"pages","referencePage":"page reference","presentation":"Final Project Presentation","oral":"Oral","codeQuality":"Source Code Quality","attend":"Class Participation","attendency":"Attendance","disscuss":"Discussion and Feedback","disscussDesc":"online and offline[6 personal assignments + 6 group assignments]","peer":"Peer Assessment","bouns":"Each group leader will get a 5% bonus"}')
    },
    fd53: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = function() {
                var e = this;
                e._self._c;
                return e._m(0)
            },
            n = [function() {
                var e = this,
                    t = e._self._c;
                return t("section", [t("h2", [e._v("Task")]), t("ol", [t("li", [e._v("大气污染物的时空动态变化趋势是怎样的？主导因素是什么？")]), t("li", [e._v("不同城市大气污染物的健康效应和经济效益是怎样的？主导\n因素是什么？")]), t("li", [e._v("基于大数据如何提高环境监测和污染物健康效应评估的准确\n性？")])]), t("h2", [e._v("DataSet")]), t("ol", [t("li", [e._v("环境学院提供部分数据")]), t("li", [e._v("各地区空气监测站下载")])])])
            }],
            s = {
                components: {}
            },
            o = s,
            r = a("2877"),
            l = Object(r["a"])(o, i, n, !1, null, null, null);
        t["default"] = l.exports
    }
});
//# sourceMappingURL=app.6bde0ddd.js.map
