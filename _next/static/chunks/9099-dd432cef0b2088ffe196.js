(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9099], {
        1234: function(t, a, e) {
            "use strict";
            e.d(a, { h: function() { return i } });
            var r = e(85893),
                o = e(67294),
                n = e(72132),
                s = e(51436),
                c = e(67814),
                i = function(t) {
                    var a = t.method,
                        e = t.children,
                        i = t.className,
                        m = t.upCounter,
                        g = t.disabled,
                        u = t.callback,
                        l = t.callbackLoading,
                        h = (0, o.useState)(!1),
                        p = h[0],
                        k = h[1];
                    return p ? (0, r.jsxs)("button", { className: "primary-btn ".concat(i || ""), disabled: !0, children: [e, " ", (0, r.jsx)(c.G, { icon: s.tmN, spin: !0 })] }) : (0, r.jsx)("button", {
                        disabled: void 0 !== g && g,
                        className: "primary-btn ".concat(i || ""),
                        onClick: function() {
                            k(!0), l && l(!0), a().then((function(t) { return t && "wait" in t ? t.wait().then((function(t) { return u && u(t), t })) : Promise.resolve(null) })).catch((function(t) {
                                u && u(t), console.log(t);
                                var a = t.message,
                                    e = t.data;
                                (0, n.Am)(e && e.message || a)
                            })).finally((function() { m && m(Date.now()), k(!1), l && l(!1) }))
                        },
                        children: e
                    })
                }
        },
        62507: function(t, a, e) {
            "use strict";
            e.d(a, { XM: function() { return r }, Ie: function() { return o }, Li: function() { return n }, Af: function() { return s }, CH: function() { return c }, om: function() { return i } });
            var r = ["Slime", "Slander", "Mushroom", "Rabbit", "Floating", "Shadow", "Dragon", "Golem", "Rock", "Turtle", "Ox", "Keeper"],
                o = [{ name: "OniFlame", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion1_idle.gif", rare: 3, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion1_attack.gif" }, { name: "OniFlame", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion2_idle.gif", rare: 3, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion2_attack.gif" }, { name: "OniFlame", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion3_idle.gif", rare: 3, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/onion3_attack.gif" }, { name: "Bombeus", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle1_idle.gif", rare: 4, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle1_attack.gif" }, { name: "Bombeus", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle2_idle.gif", rare: 4, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle2_attack.gif" }, { name: "Bombeus", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle3_idle.gif", rare: 4, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/turtle3_attack.gif" }, { name: "Koldala", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala1_idle.gif", rare: 5, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala1_attack.gif" }, { name: "Koldala", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala2_idle.gif", rare: 5, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala2_attack.gif" }, { name: "Koldala", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala3_idle.gif", rare: 5, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/koala3_attack.gif" }, { name: "Frogire", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog1_idle.gif", rare: 6, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog1_attack.gif" }, { name: "Frogire", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog2_idle.gif", rare: 6, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog2_attack.gif" }, { name: "Frogire", url: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog3_idle.gif", rare: 6, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/v2/frog3_attack.gif" }],
                n = [{ url: "https://raw.githubusercontent.com/cryptozoon/images/master/slime_1.gif", name: "Slime", class: 1, rare: 1, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slime_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Slime_5.gif", name: "Slime", class: 1, rare: 1, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slime_5_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/slime_3.gif", name: "Slime", class: 1, rare: 1, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slime_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Slamader_2.gif", name: "Slander", class: 2, rare: 1, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slamader_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Slamader_4.gif", name: "Slander", class: 2, rare: 1, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slamader_4_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Slamader_4_S.gif", name: "Slander", class: 2, rare: 1, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Slamader_4_S_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Mushroom_1.gif", name: "Mushroom", class: 1, rare: 2, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Mushroom_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Mushroom_2.gif", name: "Mushroom", class: 1, rare: 2, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Mushroom_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Mushroom_3.gif", name: "Mushroom", class: 1, rare: 2, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Mushroom_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rabbit_1.gif", name: "Rabbit", class: 2, rare: 2, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rabbit_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rabbit_3.gif", name: "Rabbit", class: 2, rare: 2, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rabbit_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rabbit_4.gif", name: "Rabbit", class: 2, rare: 2, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rabbit_4_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/FLOATING_1.gif", name: "Floating", class: 1, rare: 3, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/FLOATING_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/FLOATING_2.gif", name: "Floating", class: 1, rare: 3, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/FLOATING_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/FLOATING_3.gif", name: "Floating", class: 1, rare: 3, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/FLOATING_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Shadow_1.gif", name: "Shadow", class: 2, rare: 3, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Shadow_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Shadow_4.gif", name: "Shadow", class: 2, rare: 3, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Shadow_4_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Shadow_5.gif", name: "Shadow", class: 2, rare: 3, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Shadow_5_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/DR_Pink.gif", name: "Dragon", class: 1, rare: 4, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/DR_Pink_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/DR_Green.gif", name: "Dragon", class: 1, rare: 4, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/DR_Green_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/DR_Black.gif", name: "Dragon", class: 1, rare: 4, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/DR_Black_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Golem_1.gif", name: "Golem", class: 2, rare: 4, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Golem_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Golem_2.gif", name: "Golem", class: 2, rare: 4, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Golem_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Golem_3.gif", name: "Golem", class: 2, rare: 4, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Golem_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rock_1.gif", name: "Rock", class: 1, rare: 5, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rock_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rock_2.gif", name: "Rock", class: 1, rare: 5, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rock_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Rock_3.gif", name: "Rock", class: 1, rare: 5, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Rock_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/turtle_3.gif", name: "Turtle", class: 2, rare: 5, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/turtle_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/turtle_1.gif", name: "Turtle", class: 2, rare: 5, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/turtle_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/turtle_2.gif", name: "Turtle", class: 2, rare: 5, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/turtle_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Ox_1.gif", name: "Ox", class: 1, rare: 6, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Ox_1_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Ox_2.gif", name: "Ox", class: 1, rare: 6, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Ox_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Ox_3.gif", name: "Ox", class: 1, rare: 6, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Ox_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Keeper_3.gif", name: "Keeper", class: 2, rare: 6, level: [1, 2], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Keeper_3_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Keeper_2.gif", name: "Keeper", class: 2, rare: 6, level: [3, 4], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Keeper_2_attack.gif" }, { url: "https://raw.githubusercontent.com/cryptozoon/images/master/Keeper_1.gif", name: "Keeper", class: 2, rare: 6, level: [5, 6], attack: "https://raw.githubusercontent.com/cryptozoon/images/master/attack/Keeper_1_attack.gif" }];

            function s() {
                return function(t) {
                    for (var a = t.length - 1; a > 0; a--) {
                        var e = Math.floor(Math.random() * (a + 1)),
                            r = [t[e], t[a]];
                        t[a] = r[0], t[e] = r[1]
                    }
                    return t
                }(c).slice(0, 4)
            }
            var c = [{ name: "Hell Bogger", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster1_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster1_attack.gif" }, { name: "Riptide", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster2_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster2_attack.gif" }, { name: "Spiny Snail", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster3_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster3_attack.gif" }, { name: "Blinker", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster4_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster4_attack.gif" }, { name: "Bone Welder", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster5_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster5_attack.gif" }, { name: "Batie", url: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster6_idle.gif", attack: "https://raw.githubusercontent.com/cryptozoon/images/master/monster/monster6_attack.gif" }],
                i = [{ name: "Skyler Egg", src: "/assets/images/eggs/egg.png", type: "image", background: "", desc: "This is the most common type of MEOW egg, rare Meow spawn rate is 10%" }, { name: "Hydrein Egg", src: "/assets/images/eggs/egg.png", type: "image", background: "" }, { name: "Plasmer Egg", src: "/assets/images/eggs/egg.png", type: "image", background: "" }, { name: "Stonic Egg", src: "/assets/images/eggs/egg.png", type: "image", background: "" }, { name: "MEOW Egg", src: "/assets/images/eggs/egg.png", type: "image", background: "" }]
        },
        89191: function(t, a, e) {
            "use strict";
            e.d(a, { Sj: function() { return o }, en: function() { return n }, gj: function() { return s }, fU: function() { return i }, Wv: function() { return m }, OP: function() { return g }, hi: function() { return u }, pf: function() { return l }, IH: function() { return h } });
            var r = e(62507);

            function o(t, a) { return { tokenId: a, generation: t.generation, tribe: t.tribe, exp: t.exp, dna: t.dna, collections: t.collections, bornTime: t.bornTime } }
            var n = function(t) { var a = Math.floor(+(null === t || void 0 === t ? void 0 : t.toString()) / Math.pow(10, 26)); return a > 9999 ? 1 : a > 9707 ? 6 : a > 9359 ? 5 : a > 8706 ? 4 : a > 7836 ? 3 : a > 5224 ? 2 : 1 },
                s = function(t, a) {
                    if ("1" === a.toString()) return "Super MEOW";
                    var e = c(t),
                        o = n(null === t || void 0 === t ? void 0 : t.toString());
                    return r.XM[2 * (o - 1) + e - 1]
                },
                c = function(t) { return +(null === t || void 0 === t ? void 0 : t.toString()) % 10 < 5 ? 1 : 2 },
                i = function(t, a, e) {
                    var o = n(null === t || void 0 === t ? void 0 : t.toString()),
                        s = ("0" === e.toString() ? r.Li : r.Ie).filter((function(t) { return t.rare === o }));
                    if ("0" === e.toString()) {
                        var i = c(null === t || void 0 === t ? void 0 : t.toString());
                        s = s.filter((function(t, a) { return 1 === i ? a < 3 : a >= 3 }))
                    }
                    var g = m(null === a || void 0 === a ? void 0 : a.toString());
                    return s.find((function(t) { return -1 !== t.level.indexOf(g) }))
                };

            function m(t) { var a = parseInt(null === t || void 0 === t ? void 0 : t.toString()); return a < 1e4 ? 1 : a < 35e3 ? 2 : a < 1e5 ? 3 : a < 2e5 ? 4 : a < 4e5 ? 5 : 6 }
            var g = function(t) {
                    switch (t) {
                        case 0:
                            return "Skyler";
                        case 1:
                            return "Hydrein";
                        case 2:
                            return "Plasmer";
                        case 3:
                            return "Stonic";
                        default:
                            return ""
                    }
                },
                u = function(t, a) { return { min: 0, max: 0 } },
                l = function(t, a) {
                    if (!t) return { min: 0, max: 0 };
                    var e = [];
                    0 === a && (e = [20, 30]), 1 === a && (e = [30, 40]), 2 === a && (e = [40, 50]), 3 === a && (e = [80, 90]);
                    var r = n(t.dna),
                        o = 10 * (m(t.data ? t.data.totalExp : t.exp) - 1) + 100,
                        s = 10 * (r - 1) + 100,
                        c = "1" === t.generation.toString() ? 1.2 : 1;
                    return { min: .00011283786405 * o * e[0] * s * c, max: .0001496427327 * o * e[1] * s * c }
                },
                h = function(t) { var a = []; return 0 === t && (a = [70, 80, 1]), 1 === t && (a = [60, 70, 2]), 2 === t && (a = [50, 60, 2]), 3 === t && (a = [10, 20, 3]), { min: a[2] * (100 - a[0]) / 10, max: a[2] * (100 - a[1]) / 10 } }
        }
    }
]);