﻿window.globalProvideData('slide', '{"title":"Formats Question","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":12,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide12","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5nn3VPp9SiD","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5p03TlJ0idf.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6KivL6I4cU9"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6pSMdpKrKt7.InvalidPromptSlide"}}]}]},"ReviewInt_67eF1X7Rq39":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5p03TlJ0idf"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_67eF1X7Rq39":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67eF1X7Rq39_ReviewShape"}}]},"AnsweredInt_67eF1X7Rq39":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_67eF1X7Rq39"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111101"}]}]},"DisableChoices_67eF1X7Rq39":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5p03TlJ0idf"},"enabled":{"type":"boolean","value":false}}]},"67eF1X7Rq39_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6KivL6I4cU9.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67eF1X7Rq39"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6KivL6I4cU9.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6KivL6I4cU9.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67eF1X7Rq39"}]}]}]}]},"NavigationRestrictionNextSlide_5nn3VPp9SiD":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5shl621oQPY"}}]},"NavigationRestrictionPreviousSlide_5nn3VPp9SiD":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111111101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111111101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6pSMdpKrKt7","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6pSMdpKrKt7","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"67eF1X7Rq39_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_67eF1X7Rq39","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5shl621oQPY"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_67eF1X7Rq39","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5shl621oQPY"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5nn3VPp9SiD"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5nn3VPp9SiD"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"67eF1X7Rq39_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5p03TlJ0idf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kRmimN4swg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6o0CJvmEQfu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ZQGmFcArqN"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry7","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":369,"yPos":145,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":159.5,"rotateYPos":185,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5p03TlJ0idf","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":300,"height":371,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":142,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":52}}},"html5data":{"xPos":0,"yPos":0,"width":320,"height":371,"strokewidth":1}},"width":320,"height":371,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":321,"bottom":372,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":227}}},"id":"5p03TlJ0idf","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry7","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5kRmimN4swg_-1827167459","id":"01","linkId":"txt__default_5kRmimN4swg","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":700,"height":88,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"What accessible formats do you use in your classroom? ","style":{"fontSize":24,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":34.203,"descent":9.375,"leading":0,"underlinePosition":-2.406,"underlineThickness":1.594,"xHeight":17.125}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":54,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":692,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":228}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":49,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":98,"altText":"What accessible formats do you use in your classroom? ","pngfb":false,"pr":{"l":"Lib","i":54}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":98,"strokewidth":0}},"width":720,"height":98,"resume":true,"useHandCursor":true,"id":"5kRmimN4swg"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6o0CJvmEQfu_-1315296662","id":"01","linkId":"txt__default_6o0CJvmEQfu","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":700,"height":22,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Please write a brief response in your own words and then click next when you are finished","style":{"fontIsItalic":false,"fontFamily":"\\"Open SansItalic CItalicC6FA076B\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":89,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":676,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":57}}}],"shapemaskId":"","xPos":0,"yPos":98,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":32,"altText":"Please write a brief response in your own words and then click next when you are finished","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":32,"strokewidth":0}},"width":720,"height":32,"resume":true,"useHandCursor":true,"id":"6o0CJvmEQfu"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":51,"id":"01","url":"story_content/6NisdVGzvN7.png","type":"normal","altText":"Brandon","width":568,"height":1000,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":62,"yPos":184,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":142,"rotateYPos":250,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":284,"bottom":500,"altText":"Brandon","pngfb":false,"pr":{"l":"Lib","i":229}},"html5data":{"xPos":0,"yPos":0,"width":284,"height":500,"strokewidth":0}},"width":284,"height":500,"resume":true,"useHandCursor":true,"id":"6ZQGmFcArqN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_67eF1X7Rq39_ReviewShape","id":"01","linkId":"txt_67eF1X7Rq39_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":501,"bottom":558,"pngfb":false,"pr":{"l":"Lib","i":231}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":330,"rotateYPos":240,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":655,"bottom":563,"altText":"","pngfb":false,"pr":{"l":"Lib","i":230}},"html5data":{"xPos":0,"yPos":0,"width":655,"height":563,"strokewidth":0}},"width":660,"height":480,"resume":false,"useHandCursor":true,"id":"67eF1X7Rq39_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');