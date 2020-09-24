export default ((s,u,g)=>({fn:{},st:s,ty:{1:0,2:1,3:2,4:3,8:4,16:5,32:6,64:7,128:8,256:9,512:10,776:11,1025:12,2049:13,4097:14,8193:15,16385:16,32769:17,number:18,num:18,identifier:19,string:20,white_space:21,open_bracket:22,close_bracket:23,operator:24,symbol:25,new_line:26,tab:27,number_bin:28,number_oct:29,number_hex:30,number_int:31,number_sci:32,number_flt:33,alpha_numeric:34,white_space_new_line:38,id:19,str:20,ws:21,ob:22,cb:23,op:24,sym:25,nl:26,tb:27,int:31,integer:31,bin:28,binary:28,oct:29,octal:29,hex:30,hexadecimal:30,flt:33,float:33,sci:32,scientific:32,any:39,keyword:40},sym:["||","^=","$=","*=","<=",">=",".","#"],
    lu:new Map([["num",0],["id",1],["alpha_numeric",2],["str",3],["ws",4],["ob",5],["cb",6],["op",7],["sym",8],["nl",9],["tb",10],["white_space_new_line",11],["binary",12],["octal",13],["hexadecimal",14],["integer",15],["scientific",16],["float",17],[1,18],[2,19],[4,20],[8,21],[16,22],[32,23],[64,24],[128,25],[256,26],[512,27],[1025,28],[2049,29],[4097,30],[8193,31],[16385,32],[32769,33],[3,34],[776,38],[200,39],[201,40],[",",42],["{",43],[";",44],["}",45],["supports",46],["(",47],[")",48],["@",49],["import",50],[null,33],["keyframes",52],["from",54],["to",55],["and",56],["or",57],["not",58],["media",60],["only",61],[":",63],["<",64],["<=",65],[">",77],[">=",67],["=",68],["true",70],["false",71],["/",124],["%",73],["url",74],["\"",85],["'",123],["+",78],["~",88],["||",80],["*",81],["|",82],["#",83],[".",84],["[",86],["]",87],["^=",89],["$=",90],["*=",91],["i",92],["s",93],["!",94],["important",95],["_",97],["-",98],["$",99],["\\",107],["a",109],["b",110],["c",111],["d",112],["e",113],["f",114],["A",115],["B",116],["C",117],["D",118],["E",119],["F",120]]),sts:[0,1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,13,13,15,16,17,17,17,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,35,36,35,35,35,35,35,35,37,38,31,39,40,41,42,24,24,24,43,44,45,46,47,48,49,50,51,51,51,51,31,52,53,52,54,55,56,57,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,79,80,80,81,82,83,66,84,85,86,87,88,89,90,90,91,92,91,93,94,93,95,96,97,98,42,99,100,101,102,103,82,104,105,106,107,108,109,110,111,112,113,114,115,116,115,115,115,117,118,119,120,121,122,123,124,125,126,97,97,127,128,129,130,131,132,43,133,134,135,136,137,138,139,140,141,138,142,143,144,145,146,147,148,149,150,151,152,153,153,153,154,155,156,157,158,159,160,159,161,159,159,159,159,162,159,159,159,163,164,165,166,166,167,168,169,166,138,170,171,172,173,174,175,174,176,174,174,174,174,174,177,178,174,174,172,179,180,181,182,183,184,185,186,187,188,185,189,190,191,66,192,193,194,195,196,111,197,198,199,200,201,202,203,204,205,206,207,105,208,209,210,211,212,213,214,215,216,217,217,217,217,217,218,218,219,219,219,220,219,221,222,223,224,225,226,82,227,82,82,228,229,230,231,232,233,234,234,235,236,237,238,239,42,240,241,43,242,243,244,245,246,247,248,249,250,243,251,252,253,254,255,256,257,258,258,259,260,261,262,263,264,264,218,265,265,218,266,267,268,269,270,271,272,273,274,275,276].map(i=>s[i]),fm:[32,31,36,34,43,34,45,34,3,49,6,49,7,49,8,49,56,55,3,62,6,62,7,62,8,62,32,83,56,86,32,95,3,99,6,99,7,99,8,99,124,125,32,164,179,180,1,163,9,163,10,163,213,214,1,233,9,233,10,233,267,268,270,268,272,268,274,268,276,268,203,288,204,288,205,288,206,288,207,288,208,288,209,288,210,288,211,288,212,288,1,329,9,329,10,329,203,352,204,352,205,352,206,352,207,352,208,352,209,352,210,352,211,352,212,352,203,390,204,390,302,390,205,390,206,390,207,390,208,390,209,390,210,390,211,390,212,390],
    gt:g[0].map(i=>i>=0?u[i]:[]),fns:[_=>(([..._[0],_[1]])),_=>([_[0]]),(_,$,A,B)=>({type:$.typ.Stylesheet,imports:_[0],nodes:_[1],pos:B}),(_,$,A,B)=>({type:$.typ.Stylesheet,imports:null,nodes:_[0],pos:B}),(_,$,A,B)=>({type:$.typ.Stylesheet,imports:_[0],nodes:null,pos:B}),(_,$,A,B)=>({type:$.typ.Stylesheet,imports:null,nodes:null,pos:B}),_=>(([..._[0],_[2]])),(_,$,A,B)=>({type:$.typ.Rule,selectors:_[0],props:new Map((_[2]||[]).map(s=>[s.name,s])),pos:B,precedence:0}),(_,$,A,B)=>({type:$.typ.Rule,selectors:_[0],props:new Map((null||[]).map(s=>[s.name,s])),pos:B,precedence:0}),(_,$,A,B)=>({import:"@import",type:$.typ.Import,nodes:[_[2],_[3],..._[4]],pos:B}),(_,$,A,B)=>({import:"@import",type:$.typ.Import,nodes:[_[2],null,..._[3]],pos:B}),(_,$,A,B)=>({import:"@import",type:$.typ.Import,nodes:[_[2],_[3],...null],pos:B}),(_,$,A,B)=>({import:"@import",type:$.typ.Import,nodes:[_[2],null,...null],pos:B}),(_,$,A,B)=>({keyframes:"@keyframes",type:$.typ.Keyframes,name:_[2],nodes:[_[4]],pos:B}),(_,$,A,B)=>({type:$.typ.KeyframeBlock,nodes:[{type:$.type.KeyframeSelectors,nodes:_[0],pos:B},_[2]],pos:B}),(_,$,A,B)=>({type:$.typ.KeyframeSelector,val:_[0],pos:B}),(_,$,A,B)=>({type:$.typ.SupportConditions,nodes:_[0],pos:B}),(_,$,A,B)=>({type:$.typ.Supports,nodes:[_[0],_[2]],pos:B}),(_,$,A,B)=>({type:$.typ.And,nodes:[_[1]],pos:B}),(_,$,A,B)=>({type:$.typ.Or,nodes:[_[1]],pos:B}),(_,$,A,B)=>([{type:$.typ.Not,nodes:[_[1]],pos:B}]),_=>([_[0],..._[1]]),(_,$,A,B)=>({type:$.typ.Parenthesis,nodes:[_[1]],pos:B}),(_,$,A,B)=>({type:$.typ.Function,nodes:[_[0]],pos:B}),(_,$,A,B)=>({media:"@media",type:$.typ.Media,nodes:[_[2],..._[4]],pos:B}),(_,$,A,B)=>({media:"@media",type:$.typ.Media,nodes:[_[2]],pos:B}),(_,$,A,B)=>({queries:true,type:$.typ.MediaQueries,nodes:_[0],pos:B}),(_,$,A,B)=>({type:$.typ.Query,nodes:[_[0]],pos:B}),(_,$,A,B)=>({type:$.typ.Query,condition:_[0],nodes:[_[1],_[2]],pos:B}),(_,$,A,B)=>({type:$.typ.Query,nodes:[_[0],_[1]],pos:B}),(_,$,A,B)=>({type:$.typ.Query,condition:_[0],nodes:[_[1]],pos:B}),(_,$,A,B)=>({type:$.typ.Not,nodes:[_[1]],pos:B}),(_,$,A,B)=>({type:$.typ.MediaFeature,nodes:[_[1]],pos:B}),_=>(_[0]+_[1]),_=>(_[0]+""),(_,$,A,B)=>({type:$.typ.MediaValue,key:_[0],val:_[2],pos:B}),(_,$,A,B)=>({type:$.typ.MediaEquality,sym:_[1],left:_[0],right:_[2],pos:B}),(_,$,A,B)=>({type:$.typ.MediaRangeDescending,sym:_[1],max:_[0],id:_[2],min:_[4],pos:B}),(_,$,A,B)=>({type:$.typ.MediaRangeAscending,sym:_[1],min:_[0],id:_[2],max:_[4],pos:B}),(_,$,A,B)=>({type:$.typ.Boolean,val:true,pos:B}),(_,$,A,B)=>({type:$.typ.Boolean,val:false,pos:B}),(_,$,A,B)=>({type:$.typ.MediaType,val:_[0],pos:B}),_=>({type:"ratio",num:_[0],den:_[2]}),(_,$)=>(new $.fn.percentage(_[0]+_[1])),(_,$)=>(new $.fn.length(_[0]+_[1])),(_,$)=>(new $.fn.url(_[2])),_=>(_[1]),(_,$)=>({type:$.typ.Combinator,val:_[0]}),_=>([_[0],_[1]]),(_,$,A,B)=>((_[0]&&_[1])?{type:$.typ.ComplexSelector,nodes:[_[0],...((_[1]).flat(2))],pos:B}:_[0]),(_,$,A,B)=>((_[0]&&null)?{type:$.typ.ComplexSelector,nodes:[_[0]],pos:B}:_[0]),(_,$,A,B)=>({type:$.typ.PseudoSelector,nodes:[_[0],..._[1]],pos:B}),(_,$,A,B)=>({type:$.typ.PseudoSelector,nodes:[_[0]],pos:B}),(_,$,A,B)=>((_[0]&&!(_[1]||_[2]))?_[0]:(_[1]&&_[1].length==1&&!(_[0]||_[2]))?_[1][0]:{type:$.typ.CompoundSelector,nodes:[_[0],..._[1],..._[2]],pos:B}),(_,$,A,B)=>((null&&!(_[0]||_[1]))?null:(_[0]&&_[0].length==1&&!(null||_[1]))?_[0][0]:{type:$.typ.CompoundSelector,nodes:[..._[0],..._[1]],pos:B}),(_,$,A,B)=>((_[0]&&!(null||_[1]))?_[0]:(null&&null.length==1&&!(_[0]||_[1]))?null[0]:{type:$.typ.CompoundSelector,nodes:[_[0],..._[1]],pos:B}),(_,$,A,B)=>((_[0]&&!(_[1]||null))?_[0]:(_[1]&&_[1].length==1&&!(_[0]||null))?_[1][0]:{type:$.typ.CompoundSelector,nodes:[_[0],..._[1]],pos:B}),(_,$,A,B)=>((null&&!(null||_[0]))?null:(null&&null.length==1&&!(null||_[0]))?null[0]:{type:$.typ.CompoundSelector,nodes:[..._[0]],pos:B}),(_,$,A,B)=>((null&&!(_[0]||null))?null:(_[0]&&_[0].length==1&&!(null||null))?_[0][0]:{type:$.typ.CompoundSelector,nodes:[..._[0]],pos:B}),(_,$,A,B)=>((_[0]&&!(null||null))?_[0]:(null&&null.length==1&&!(_[0]||null))?null[0]:{type:$.typ.CompoundSelector,nodes:[_[0]],pos:B}),(_,$,A,B)=>((null&&!(null||null))?null:(null&&null.length==1&&!(null||null))?null[0]:{type:$.typ.CompoundSelector,nodes:[],pos:B}),_=>(_[0]),()=>(null),(_,$,A,B)=>({type:$.typ.QualifiedName,ns:_[0]||"",val:_[1],pos:B}),(_,$,A,B)=>({type:$.typ.QualifiedName,ns:"",val:_[0],pos:B}),(_,$,A,B)=>({type:$.typ.IdSelector,val:_[1],pos:B,precedence:$.typ.B_SPECIFIER}),(_,$,A,B)=>({type:$.typ.ClassSelector,val:_[1],pos:B,precedence:$.typ.C_SPECIFIER}),(_,$,A,B)=>({type:$.typ.PseudoClassSelector,id:_[1],val:_[2],pos:B,precedence:$.typ.C_SPECIFIER}),(_,$,A,B)=>({type:$.typ.PseudoClassSelector,id:_[1],pos:B,precedence:$.typ.C_SPECIFIER}),_=>("\""+_[1]+"\""),(_,$,A,B)=>({type:$.typ.AttributeSelector,nodes:[_[1]],pos:B,precedence:$.typ.C_SPECIFIER}),(_,$,A,B)=>({type:$.typ.AttributeSelector,nodes:[_[1]],match_type:_[2],match_val:_[3],mod:_[4],pos:B,precedence:$.typ.C_SPECIFIER}),(_,$,A,B)=>({type:$.typ.AttributeSelector,nodes:[_[1]],match_type:_[2],match_val:_[3],pos:B,precedence:$.typ.C_SPECIFIER}),(_,$,A,B)=>({type:$.typ.TypeSelector,nodes:[_[0]],pos:B,precedence:$.typ.D_SPECIFIER}),(_,$,A,B)=>({type:$.typ.TypeSelector,nodes:[{type:$.typ.QualifiedName,ns:_[0]||"",val:"*",pos:B,precedence:0}],pos:B}),(_,$,A,B)=>({type:$.typ.TypeSelector,nodes:[{type:$.typ.QualifiedName,ns:"",val:"*",pos:B,precedence:0}],pos:B}),(_,$)=>(_[1].type=$.typ.PseudoElementSelector,_[1].precedence=$.typ.D_SPECIFIER,_[1]),_=>(_[0]+_[1]+_[2]+_[3]),_=>({val:parseFloat(_[0]),type:"hex",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"bin",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"oct",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"sci",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"flt",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"int",original_val:_[0]})],sa:[e=>138,e=>106,e=>306,e=>74,e=>98,e=>298,e=>426,e=>434,e=>130,e=>114,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),9),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),18443),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),2059),e=>242,e=>722,e=>354,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),10251),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),6155),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),4107),(a,b,c,e,f,g,p)=>(p.rv(g[73],1,0,a,b,c,e,f),186379),(a,b,c,e,f,g,p)=>(p.rv(g[75],1,0,a,b,c,e,f),186379),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),161803),(a,b,c,e,f,g,p)=>(p.rv(g[64],1,0,a,b,c,e,f),165899),e=>266,(a,b,c,e,f,g,p)=>(p.rv(g[62],1,0,a,b,c,e,f),163851),e=>458,e=>282,e=>290,e=>490,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),215051),(a,b,c,e,f,g,p)=>(p.rv(g[57],1,0,a,b,c,e,f),157707),e=>322,e=>20,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),213003),e=>378,e=>330,e=>131092,e=>394,e=>402,e=>386,e=>338,e=>346,e=>362,e=>262164,e=>370,e=>393236,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),149515),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),167947),(a,b,c,e,f,g,p)=>(p.rv(g[58],1,0,a,b,c,e,f),157707),e=>524308,e=>655380,e=>786452,e=>917524,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),155659),(a,b,c,e,f,g,p)=>(p.rv(g[52],1,0,a,b,c,e,f),153611),e=>586,e=>1048596,e=>466,e=>474,e=>482,(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),18451),(a,b,c,e,f,g,p)=>(p.rv(g[59],1,0,a,b,c,e,f),157707),e=>1179668,e=>1310740,e=>1441812,e=>1572884,e=>506,(a,b,c,e,f,g,p)=>(p.rv(g[61],2,0,a,b,c,e,f),163859),(a,b,c,e,f,g,p)=>(p.rv(g[50],1,0,a,b,c,e,f),147467),e=>554,e=>570,e=>578,e=>562,e=>626,e=>602,e=>618,e=>642,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),155667),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),215059),e=>690,e=>698,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),149523),(a,b,c,e,f,g,p)=>(p.rv(g[54],2,0,a,b,c,e,f),157715),e=>1703956,e=>778,(a,b,c,e,f,g,p)=>(p.rv(g[51],2,0,a,b,c,e,f),153619),e=>1835028,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),151563),e=>858,e=>1034,e=>1018,e=>1162,e=>1154,e=>1010,(a,b,c,e,f,g,p)=>(p.rv(g[55],2,0,a,b,c,e,f),157715),e=>1966100,(a,b,c,e,f,g,p)=>(p.rv(g[74],2,0,a,b,c,e,f),186387),(a,b,c,e,f,g,p)=>(p.rv(g[63],2,0,a,b,c,e,f),165907),(a,b,c,e,f,g,p)=>(p.rv(g[56],2,0,a,b,c,e,f),157715),e=>2097172,e=>2228244,e=>2359316,e=>2490388,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),145419),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),143371),(a,b,c,e,f,g,p)=>(p.rv(g[47],1,0,a,b,c,e,f),141323),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),159755),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),20491),e=>1042,e=>1074,e=>1058,e=>1098,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),36875),(a,b,c,e,f,g,p)=>(p.rv(g[65],2,0,a,b,c,e,f),170003),(a,b,c,e,f,g,p)=>(p.rv(g[68],2,0,a,b,c,e,f),176147),e=>1146,(a,b,c,e,f,g,p)=>(p.rv(g[76],2,0,a,b,c,e,f),188435),e=>1106,e=>1114,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),190475),e=>1122,(a,b,c,e,f,g,p)=>(p.rv(g[8],3,0,a,b,c,e,f),12315),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),194571),e=>1226,(a,b,c,e,f,g,p)=>(p.rv(g[61],1,0,a,b,c,e,f),198667),e=>2621460,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),200715),e=>1218,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),192523),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),217099),(a,b,c,e,f,g,p)=>(p.rv(g[66],2,0,a,b,c,e,f),172051),e=>1202,e=>1170,e=>1186,e=>1178,e=>1194,e=>1210,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),151571),e=>2154,(a,b,c,e,f,g,p)=>(p.rv(g[16],1,0,a,b,c,e,f),45067),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),53259),e=>1298,e=>1306,(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),8203),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),55307),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),57355),e=>2034,e=>1274,e=>1362,(a,b,c,e,f,g,p)=>(p.rv(g[26],1,0,a,b,c,e,f),69643),e=>1314,e=>2138,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),67595),(a,b,c,e,f,g,p)=>(p.rv(g[27],1,0,a,b,c,e,f),75787),e=>1394,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),77835),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),79883),(a,b,c,e,f,g,p)=>(p.rv(g[49],2,0,a,b,c,e,f),147475),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),96267),e=>1442,e=>1410,(a,b,c,e,f,g,p)=>(p.rv(g[41],1,0,a,b,c,e,f),124939),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),71691),(a,b,c,e,f,g,p)=>(p.rv(g[53],3,0,a,b,c,e,f),157723),e=>2752532,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),135179),e=>1450,e=>1466,e=>1482,e=>1474,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),137227),(a,b,c,e,f,g,p)=>(p.rv(g[67],3,0,a,b,c,e,f),176155),e=>1562,e=>1538,e=>1546,e=>1578,(a,b,c,e,f,g,p)=>(p.rv(g[7],4,0,a,b,c,e,f),12323),(a,b,c,e,f,g,p)=>(p.rv(g[8],4,0,a,b,c,e,f),12323),e=>1570,(a,b,c,e,f,g,p)=>(p.rv(g[61],2,0,a,b,c,e,f),198675),e=>2883604,(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),10267),e=>1690,e=>1682,e=>1642,e=>1658,e=>1674,e=>1650,e=>1634,e=>1618,e=>1610,e=>1602,e=>3014676,e=>3145748,e=>3276820,e=>1786,e=>1770,e=>1746,e=>1754,(a,b,c,e,f,g,p)=>(p.rv(g[70],3,0,a,b,c,e,f),180251),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),182283),e=>1834,e=>1842,e=>1906,e=>1866,e=>1874,e=>1898,e=>1850,e=>1858,e=>1810,e=>1826,e=>1890,e=>1930,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),196619),e=>3407892,(a,b,c,e,f,g,p)=>(p.rv(g[21],2,0,a,b,c,e,f),53267),(a,b,c,e,f,g,p)=>(p.rv(g[4],1,0,a,b,c,e,f),8203),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),51211),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),6163),e=>2002,e=>1970,e=>1978,(a,b,c,e,f,g,p)=>(p.rv(g[48],2,0,a,b,c,e,f),143379),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),192531),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),190483),(a,b,c,e,f,g,p)=>(p.rv(g[29],2,0,a,b,c,e,f),75795),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),145427),(a,b,c,e,f,g,p)=>(p.rv(g[21],2,0,a,b,c,e,f),88083),(a,b,c,e,f,g,p)=>(p.rv(g[21],2,0,a,b,c,e,f),94227),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),86027),e=>2082,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),92171),(a,b,c,e,f,g,p)=>(p.rv(g[12],3,0,a,b,c,e,f),28699),e=>3538964,e=>2066,e=>3670036,e=>3801108,(a,b,c,e,f,g,p)=>(p.rv(g[20],2,0,a,b,c,e,f),53267),e=>2114,e=>2122,(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),135187),e=>2146,(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),139291),(a,b,c,e,f,g,p)=>(p.rv(g[46],3,0,a,b,c,e,f),139291),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),137235),(a,b,c,e,f,g,p)=>(p.rv(g[30],2,0,a,b,c,e,f),75795),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),32779),e=>2178,e=>2250,e=>2194,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),38923),(a,b,c,e,f,g,p)=>(p.rv(g[15],1,0,a,b,c,e,f),43019),e=>2202,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),196627),(a,b,c,e,f,g,p)=>(p.rv(g[7],5,0,a,b,c,e,f),12331),e=>2210,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),262155),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),260107),e=>2218,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),264203),(a,b,c,e,f,g,p)=>(p.rv(g[31],2,0,a,b,c,e,f),81939),e=>2234,e=>2242,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),122891),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),98315),e=>2306,e=>2258,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),118795),e=>3932180,e=>2266,e=>4063252,e=>2282,e=>4194324,e=>2290,e=>4325396,e=>2274,e=>4456468,(a,b,c,e,f,g,p)=>(p.rv(g[39],1,0,a,b,c,e,f),120843),(a,b,c,e,f,g,p)=>(p.rv(g[40],1,0,a,b,c,e,f),120843),e=>2314,e=>2322,e=>2346,e=>2330,e=>2362,e=>2338,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),223243),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),219147),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),210955),e=>4587540,e=>4718612,e=>4849684,e=>4980756,e=>5111828,e=>5242900,e=>5373972,e=>5505044,e=>5636116,e=>5767188,(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),182291),(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),194587),e=>2370,e=>2394,(a,b,c,e,f,g,p)=>(p.rv(b.fn.parseDeclaration,3,0,a,b,c,e,f),204827),e=>2458,e=>2410,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),51219),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),2067),e=>2434,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),104459),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),102411),(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),106523),(a,b,c,e,f,g,p)=>(p.rv(g[18],2,0,a,b,c,e,f),49171),(a,b,c,e,f,g,p)=>(p.rv(g[19],2,0,a,b,c,e,f),49171),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),86035),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),92179),(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),67611),e=>2474,e=>2482,e=>2490,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),178187),(a,b,c,e,f,g,p)=>(p.rv(g[10],4,0,a,b,c,e,f),28707),e=>2562,e=>2538,(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),26635),(a,b,c,e,f,g,p)=>(p.rv(g[18],2,0,a,b,c,e,f),73747),(a,b,c,e,f,g,p)=>(p.rv(g[18],2,0,a,b,c,e,f),90131),(a,b,c,e,f,g,p)=>(p.rv(g[22],3,0,a,b,c,e,f),55323),(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),59419),(a,b,c,e,f,g,p)=>(p.rv(g[11],4,0,a,b,c,e,f),28707),e=>5898260,e=>6029332,e=>6160404,e=>2522,(a,b,c,e,f,g,p)=>(p.rv(g[45],4,0,a,b,c,e,f),133155),e=>2546,(a,b,c,e,f,g,p)=>(p.rv(g[28],3,0,a,b,c,e,f),75803),(a,b,c,e,f,g,p)=>(p.rv(g[18],2,0,a,b,c,e,f),83987),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),32787),(a,b,c,e,f,g,p)=>(p.rv(g[13],6,0,a,b,c,e,f),34867),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),129043),(a,b,c,e,f,g,p)=>(p.rv(g[46],3,0,a,b,c,e,f),174107),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),260115),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),262163),(a,b,c,e,f,g,p)=>(p.rv(g[22],3,0,a,b,c,e,f),96283),(a,b,c,e,f,g,p)=>(p.rv(g[32],3,0,a,b,c,e,f),100379),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),110603),e=>2610,(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),223251),(a,b,c,e,f,g,p)=>(p.rv(g[44],2,0,a,b,c,e,f),131091),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),219155),(a,b,c,e,f,g,p)=>(p.rv(b.fn.parseDeclaration,4,0,a,b,c,e,f),204835),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),210963),e=>6291476,e=>6422548,e=>6553620,e=>6684692,e=>6815764,e=>6946836,e=>7077908,e=>7208980,e=>7340052,e=>7471124,e=>2626,(a,b,c,e,f,g,p)=>(p.rn(4,a,b,c,e,f),106531),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),104467),e=>2658,e=>2674,e=>2682,(a,b,c,e,f,g,p)=>(p.rv(g[72],5,0,a,b,c,e,f),180267),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),184331),e=>2698,(a,b,c,e,f,g,p)=>(p.rv(g[2],2,0,a,b,c,e,f),8211),(a,b,c,e,f,g,p)=>(p.rv(g[9],5,0,a,b,c,e,f),28715),(a,b,c,e,f,g,p)=>(p.rv(g[25],5,0,a,b,c,e,f),63531),(a,b,c,e,f,g,p)=>(p.rv(g[1],1,0,a,b,c,e,f),16395),(a,b,c,e,f,g,p)=>(p.rv(g[17],5,0,a,b,c,e,f),47147),(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),38939),e=>2746,e=>2754,(a,b,c,e,f,g,p)=>(p.rv(g[36],3,0,a,b,c,e,f),116763),(a,b,c,e,f,g,p)=>(p.rv(g[35],3,0,a,b,c,e,f),108571),(a,b,c,e,f,g,p)=>(p.rv(g[42],3,0,a,b,c,e,f),127003),e=>2770,e=>2762,(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),202771),e=>2786,e=>2794,(a,b,c,e,f,g,p)=>(p.rv(g[34],1,0,a,b,c,e,f),208907),(a,b,c,e,f,g,p)=>(p.rv(g[23],4,0,a,b,c,e,f),61475),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),206859),e=>7602196,e=>7733268,e=>7864340,e=>7995412,e=>8126484,e=>8257556,e=>8388628,e=>8519700,e=>8650772,e=>8781844,e=>8912916,(a,b,c,e,f,g,p)=>(p.rv(g[71],6,0,a,b,c,e,f),180275),e=>2810,(a,b,c,e,f,g,p)=>(p.rv(g[69],3,0,a,b,c,e,f),178203),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),22539),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),30731),e=>2826,(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),26651),e=>2834,(a,b,c,e,f,g,p)=>(p.rv(g[14],4,0,a,b,c,e,f),40995),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),112651),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),114699),(a,b,c,e,f,g,p)=>(p.rv(g[77],4,0,a,b,c,e,f),210979),(a,b,c,e,f,g,p)=>(p.rv(g[33],2,0,a,b,c,e,f),208915),(a,b,c,e,f,g,p)=>(p.rn(4,a,b,c,e,f),24611),(a,b,c,e,f,g,p)=>(p.rv(g[14],5,0,a,b,c,e,f),41003),(a,b,c,e,f,g,p)=>(p.rv(g[37],5,0,a,b,c,e,f),116779),(a,b,c,e,f,g,p)=>(p.rv(g[38],5,0,a,b,c,e,f),116779),e=>2874,(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),16403),(a,b,c,e,f,g,p)=>(p.rv(g[24],6,0,a,b,c,e,f),63539),e=>2890,(a,b,c,e,f,g,p)=>(p.rv(g[17],6,0,a,b,c,e,f),47155)],
    gtk:function getToken(l, SYM_LU, IGNORE_GRAMMAR_SYMBOLS = false) {    if (l.END)        return 0;    if (!IGNORE_GRAMMAR_SYMBOLS)        if (SYM_LU.has(l.tx) || SYM_LU.has(l.ty))            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    if ((l.ty & 1)) {        switch (l.ty) {            case 16385:                return 32;            case 4097:                return 30;            case 2049:                return 29;            case 1025:                return 28;            case 32769:                return 33;            case 8193:                return 31;            default:            case 1:                return 18;        }    }    switch (l.ty) {        case 2:            return 19;        case 4:            return 20;        case 256:            return 26;        case 8:            return 21;        case 512:            return 27;    }    return 39;},}))(...("-k;2;-2;0;-5;0;-n;4;-e;6;-i;8;a;c;e;-2;g;-c;i;k&m;-l;0;-5;0&o;-j;q;-2;0;-5;0;-i;s;-5;q;-e;q;-e;paz;-2;2t5n;-2;q;-2;q;-a;paz&-m;0;-5;0;-g;u;w&-m;0;-5;0;-g;pb7&10;-j;10;-2;0;-5;0;-n;10;-e;10;-e;pb9;-2;2t5x;-2;10;-2;10;-a;pb9&12;-j;12;-2;0;-5;0;-n;12;-e;12;-e;pbb;-2;2t5z;-2;12;-2;12;-a;pbb&-k;14;-2;14;-5;0;-7;14;-9;pbd;-5;14;-f;14;-e;pbd;-2;2t61;-2;14;-2;14;-a;pbd&-k;16;-2;16;-5;0;-7;16;-9;pbf;-5;16;-f;16;-e;pbf;-2;pbf;18;pbf;-2;16;-2;16;-a;pbf&-k;1a;-2;1a;-5;0;-7;1a;-9;pbj;-5;1a;-f;1a;-5;1a;-9;pbj;-2;pbj;18;pbj;-2;3igf;-7;pbj&-m;0;-5;0;-1k;1c&-k;1e;-2;0;-5;0;-1j;1e;-h;pbn&-r;0;-k;1g;-4;1i;-2;1k;-8;1m&1o;-i;pbx;-2;1o;-5;0;-2;1em5;-3;1o;-7;1o;-2;1em5;-3;1em5;-7;1o;-7;1em5;-2;pbx;-9;pbx;-2;2t6l;-2;4x19;-4;1em5&-k;1q;-2;1q;-5;0;-7;1q;-9;pbz;-5;1q;-f;1u;-e;pbz;-2;2t6n;-2;1q;-2;1q;-a;pbz&1w;-i;1y;22;-2;1w;-5;0;-2;24;26;28;-3;1w;-7;2a;-2;1emd;-3;1emd;-7;1w;-7;1emd;-2;pc5;-9;pc5;-2;2t6t;-2;4x1h;-4;2c;2g;2k&-k;2m;-2;2m;-5;0;-7;2m;-9;pcv;-5;2m;-f;2m;-e;pcv;-2;2t7j;-2;2m;-2;2m;-a;pcv&-k;2o;-2;2o;-5;0;-7;2o;-9;pcx;-5;2o;-f;2o;-e;pcx;-2;2t7l;-2;2o;-2;2o;-a;pcx&-k;2q;-2;2q;-5;0;-7;2q;-9;pcz;-5;2q;-f;2s;-e;pcz;-2;1en7;2u;2w;-2;2y;-2;2q;-a;pcz&-k;30;-2;30;-5;0;-7;30;-9;pd9;-5;30;-f;30;-e;pd9;-2;2t7x;-2;30;-2;30;-a;pd9&-k;32;-2;32;-5;0;-7;32;-9;pdb;-5;32;-f;36;-e;pdb;-2;2t7z;-2;32;-2;32;-a;pdb&o;-j;o;-2;0;-5;0;-i;38;-5;o;-e;o;-e;pax;-2;2t5l;-2;o;-2;o;-a;pax&o;-j;o;-2;0;-5;0;-i;3a;-5;o;-e;o;-e;pax;-2;2t5l;-2;o;-2;o;-a;pax&o;-j;o;-2;0;-5;0;-i;3c;-5;o;-e;o;-e;pax;-2;2t5l;-2;o;-2;o;-a;pax&3e;-j;3e;-2;0;-5;0;-n;3e;-e;3e;-e;pdn;-2;2t8b;-2;3e;-2;3e;-a;pdn&-k;3g;-2;3g;-5;0;-7;3g;-9;pdp;-5;3g;-f;3i;-e;pdp;-2;1enx;3k;3m;-2;3o;-2;3g;-a;pdp&-k;2;-2;0;-5;0;-1j;3q;-h;i;k&-k;3s;-2;0;-5;0;-1j;3s;-h;pe1&-k;2;-2;0;-5;0;-g;pe3;-5;3u;-f;6;-e;3w;3y;-2;40;8;a;c;e;-2;g;-2;42;-a;i;k&-m;0;-5;0;-1c;44;-b;46;-12;48&-k;4a;-2;0;-5;0;-1n;46;-12;48&-k;2;-7;0;-20;i;k&-k;2;-7;0;-11;34;-z;i;k&-k;4c;-2;4c;-5;0;-7;4c;-9;pel;-5;4c;-f;4c;-e;pel;-2;2t99;-2;4c;-2;4c;-a;pel&-r;0;-11;34&4e;-i;pen;-2;4e;-5;0;-2;1eov;-3;4e;-7;4e;-2;1eov;-3;1eov;-7;4e;-7;1eov;-2;pen;-9;pen;-2;2t9b;-2;4x3z;-4;1eov&-k;2;-2;0;-5;0;-i;4g;4i;-1h;i;k&-k;4k;-2;4k;-5;0;-7;4k;-9;pet;-5;4k;-f;4k;-e;pet;-2;2t9h;-2;4k;-2;4k;-a;pet&-k;4m;-2;4m;-5;0;-7;4m;-9;pev;-5;4m;-f;4o;-e;pev;-2;2t9j;-2;4m;-2;4m;-a;pev&-k;2;-2;0;-5;0;-1j;4q;a;-g;i;k&-k;4s;-2;4s;-5;0;-7;4s;-9;pf1;-5;4s;-f;4u;-e;pf1;-2;2t9p;-2;4s;-2;4s;-a;pf1&-k;4w;-2;4w;-5;0;-7;4w;-9;pf5;-5;4w;-f;4w;-e;pf5;-2;2t9t;-2;4w;-2;4w;-a;pf5&-k;2;-2;0;-5;0;-7;4y;-e;50;-b;52;-14;i;k&-k;2;-2;0;-5;0;-l;54;-b;56;-3;58;-11;i;k&-k;5a;-2;5a;-5;0;-7;5a;-9;pfj;-5;5a;-f;5c;-e;pfj;-2;2ta7;-2;5a;-2;5a;-a;pfj&-k;5e;-2;5e;-5;0;-7;5e;-9;pfn;-5;5e;-f;5e;-e;pfn;-2;2tab;-2;5e;-2;5e;-a;pfn&-k;5g;-2;5g;-5;0;-7;5g;-9;pfp;-5;5g;-f;5g;-5;5g;-9;pfp;-2;2tad;-2;3ikl;-7;pfp&-k;5i;-2;5i;-5;0;-7;5i;-9;pfr;-5;5i;-f;5k;-e;pfr;-2;1epz;5m;5o;-2;5q;-2;5i;-a;pfr&-k;5s;-2;0;-5;0;-g;pg1;-5;5s;-f;5s;-e;pg1;-2;2tap;-2;5s;-2;5s;-a;pg1&-k;5u;-2;0;-5;0;-g;pg3;-5;5u;-f;5u;-e;pg3;-2;2tar;-2;5u;-2;5u;-a;pg3&-k;5w;-2;0;-5;0;-g;pg5;-5;5w;-f;5w;-e;pg5;-2;2tat;-2;5w;-2;5w;-a;pg5&-k;5y;-2;0;-5;0;-g;pg7;-5;5y;-f;5y;-e;pg7;-2;2tav;-2;5y;-2;5y;-a;pg7&60;-j;60;-2;0;-5;0;-i;60;-2;pg9;-2;60;-9;60;-3;60;-2;60;-e;pg9;-2;2tax;-2;60;-2;60;-a;pg9&-m;0;-5;0;-d;62&-m;0;-5;0;-d;64&-m;0;-5;0;-l;66&-m;0;-5;0;-h;68&-m;0;-5;0;-h;6a&-k;6c;-2;6c;-5;0;-7;6c;-9;pgl;-5;6c;-f;6c;-e;pgl;-2;2tb9;-2;6c;-2;6c;-a;pgl&-k;6e;-2;6e;-5;0;-7;6e;-9;pgn;-4;6g;6e;-f;6e;-e;pgn;-2;2tbb;-2;6e;-2;6e;-a;pgn&-k;6i;-2;6i;-5;0;-7;6i;-9;pgr;-5;6i;-f;6i;-e;pgr;-2;2tbf;-2;6i;-2;6i;-a;pgr&-m;0;-5;0;-i;6k;6m&-k;6o;-2;0;-5;0;-i;6o;6q;-1h;pgx&6s;-j;6s;-2;0;-5;0;-j;6s;-4;6s;-e;6s;-e;ph1;-2;2tbp;-2;6s;-2;6s;-a;ph1&-m;0;-5;0;-i;ph3&-m;0;-5;0;-i;70;6y&-k;2;-2;0;-5;0;-11;6;-i;8;a;c;e;-2;g;-c;i;k&-m;0;-5;0;-i;phb&-m;0;-5;0;-11;74&-m;0;-5;0;-i;phf&-j;1y;20;-2;0;-5;0;-2;24;26;28;-a;2a;-n;78;-y;2c;2e;2i&-k;7a;-2;7a;-5;0;-7;7a;-9;phj;-5;7a;-f;7a;-e;phj;-2;2tc7;-2;7a;-2;7a;-a;phj&-m;0;-5;0;-16;7c;-j;7e;7g;7i;7k;7m&-m;0;-5;0;-1k;18&-k;7o;-2;7o;-5;0;-7;7o;-9;phx;-5;7o;-f;7o;-e;phx;-2;2tcl;-2;7o;-2;7o;-a;phx&-m;0;-5;0;-h;7q&-m;0;-5;0;-h;7s&-m;0;-5;0;-h;7u;-5;7u;-8;7w;7y&80;-j;2;-2;0;-5;0;-n;4;-e;6;-i;8;a;c;e;-2;g;-c;i;k&-m;0;-5;0;-h;82;-5;82;-8;pib&-m;0;-5;0;-h;84;-5;84;-8;pid&-m;0;-5;0;-l;86&-k;2;-2;0;-5;0;-20;i;k&-m;0;-5;0;-l;88&-m;0;-5;0;-g;8a;8c&-k;2;-2;0;-5;0;-i;8e;-1i;i;k&-m;0;-5;0;-h;8g&-m;0;-5;0;-g;pir&8k;-j;8k;-2;0;-5;0;-g;1et1;-5;8k;-e;8k;-e;pit;-2;2tdh;-2;8k;-2;8k;-a;pit&8k;-j;8k;-2;0;-5;0;-g;1et1;-5;8k;-7;8m;-7;8k;-e;pit;-2;2tdh;-2;8k;-2;8k;-a;pit&8o;-j;8o;-2;0;-5;0;-g;1et5;-4;pix;-e;8o;-e;pix;-2;2tdl;-2;8o;-2;8o;-a;pix&8q;-j;8q;-2;0;-5;0;-g;1et7;-4;piz;-e;8q;-e;piz;-2;2tdn;-2;8q;-2;8q;-a;piz&-k;2;-2;0;-5;0;-g;pj1;-5;8s;-f;6;-e;3w;3y;-2;40;8;a;c;e;-2;g;-2;42;-a;i;k&8u;-j;8u;-2;0;-5;0;-g;1etb;-4;pj3;-7;pj3;-6;8u;-e;pj3;-2;2tdr;-2;8u;-2;8u;-a;pj3&8q;-j;8q;-2;0;-5;0;-g;1et7;-4;piz;-7;8w;8y;-6;8q;-e;piz;-2;2tdn;-2;8q;-2;8q;-a;piz&90;-j;90;-2;0;-5;0;-g;1eth;-3;88;-2;90;-7;90;-7;90;-e;pj9;-2;2tdx;-2;90;-2;90;-a;pj9&-k;92;-2;0;-5;0;-20;pjb&-k;2;-2;0;-5;0;-7;4y;-e;50;-1f;i;k&-k;94;-2;94;-5;0;-7;94;-9;pjd;-5;94;-f;96;-e;pjd;-2;2te1;-2;94;-2;94;-a;pjd&-m;0;-5;0;-d;98;-1a;98&-m;0;-5;0;-d;9a;-1a;9c&-m;0;-5;0;-1n;46;-12;48&-m;0;-5;0;-d;9e;-2c;9g&-m;0;-5;0;-d;9i;-2c;9i&-k;9k;-2;9k;-5;0;-7;9k;-9;pjt;-5;9k;-f;9k;-e;pjt;-2;2teh;-2;9k;-2;9k;-a;pjt&-j;9m;-3;0;-5;0;-s;9o;9q&-m;0;-5;0;-j;9s&9u;-j;9u;-2;0;-5;0;-j;9u;-4;9u;-e;9u;-e;pk3;-2;2ter;-2;9u;-2;9u;-a;pk3&9w;-j;9w;-2;0;-5;0;-j;9w;-4;9w;-e;9w;-e;pk5;-2;2tet;-2;9w;-2;9w;-a;pk5&-m;0;-5;0;-i;a2;a0&-m;0;-5;0;-g;pkd&-j;a6;a8;-2;0;aa;ac;-2;ae;0;-d;ag;-1m;ai;ak;-9;am;-h;ao&-k;aq;-2;0;-5;0;-l;54;-1f;as;au&-j;aw;2;-2;0;-5;0;-l;54;-b;ay;-c;b0;b2;-r;i;k&-k;b4;-2;b4;-5;0;-7;b4;-9;pld;-5;b4;-f;b4;-e;pld;-2;2tg1;-2;b4;-2;b4;-a;pld&-k;b6;-2;0;-5;0;-1n;b6;-d;plf&-m;0;-5;0;-16;b8&-j;ba;bc;-2;0;be;bg;bi;bk;0;-d;bm;-1m;bo;bq;-9;bs&-k;2;-2;0;-5;0;-i;by;bw;-1h;i;k&-m;0;-5;0;-h;c0;-5;c0;-8;7w;7y&c2;-j;2;-2;0;-5;0;-n;4;-e;6;-i;8;a;c;e;-2;g;-c;i;k&-m;0;-5;0;-h;c4;-5;c4;-8;pmd&c6;-j;c6;-2;0;-5;0;-n;c6;-e;c6;-e;pmf;-2;2th3;-2;c6;-2;c6;-a;pmf&o;-j;o;-2;0;-5;0;-i;s;-5;o;-e;o;-e;pax;-2;2t5l;-2;o;-2;o;-a;pax&-m;c8;-5;0;-d;ca;-9;cc&-k;ce;-2;0;-5;0;-g;pmn;-5;ce;-f;ce;-e;pmn;-2;2thb;-2;ce;-2;ce;-a;pmn&-m;0;-5;0;-i;pmp&-k;ci;-2;0;-5;0;-i;ci;-1i;pmr&ck;-j;ck;-2;0;-5;0;-g;1ex1;-5;ck;-e;ck;-e;pmt;-2;2thh;-2;ck;-2;ck;-a;pmt&-k;cm;-2;0;-5;0;-g;pmv;-5;cm;-f;cm;-e;pmv;-2;2thj;-2;cm;-2;cm;-a;pmv&co;-j;co;-2;0;-5;0;-g;1ex5;-4;pmx;-7;8w;-7;co;-e;pmx;-2;2thl;-2;co;-2;co;-a;pmx&cq;-j;cq;-2;0;-5;0;-g;1ex7;-4;pmz;-8;8y;-6;cq;-e;pmz;-2;2thn;-2;cq;-2;cq;-a;pmz&cs;-j;cs;-2;0;-5;0;-g;1ex9;-4;pn1;-7;cs;-7;cs;-e;pn1;-2;2thp;-2;cs;-2;cs;-a;pn1&-k;2;-2;0;-5;0;-1n;cu;-d;i;k&cw;-j;cw;-2;0;-5;0;-g;1exd;-4;pn5;-8;cw;-6;cw;-e;pn5;-2;2tht;-2;cw;-2;cw;-a;pn5&cy;-j;d0;-2;0;-5;0;-i;cy;-2;d2;54;-2;cy;-9;56;-3;58;-2;cy;-e;pn7;-2;2thv;-2;cy;-2;cy;-a;d4;d6&-k;2;-2;0;-5;0;-l;54;-b;ay;-14;i;k&-m;0;-5;0;-h;d8;-5;d8&-k;2;-2;0;-5;0;-l;54;-1f;i;k&-m;0;-5;0;-m;da&-m;0;-5;0;-m;dc&-j;1y;20;-2;1w;-5;0;-2;24;26;28;-3;1w;-7;2a;-7;1w;-g;78;-y;2c;2e;2i&-m;0;-5;0;-d;de;-1a;de&-m;0;-5;0;-m;dg&di;-j;di;-2;0;-5;0;-h;pnr;-2;2487;-9;di;-3;di;-2;di;-e;pnr;-2;2tif;-2;di;-2;di;-a;pnr&dk;-j;dk;-2;0;-5;0;-h;pnt;-2;2489;-9;dk;-3;dk;-2;dk;-e;pnt;-2;2tih;-2;dk;-2;dk;-a;pnt&-m;0;-5;0;-d;dm;-2c;dm&do;-j;do;-2;0;-5;0;-g;1ey5;-5;do;-7;8m;-7;do;-e;pnx;-2;2til;-2;do;-2;do;-a;pnx&90;-j;90;-2;0;-5;0;-g;1eth;-5;90;-7;90;-7;90;-e;pj9;-2;2tdx;-2;90;-2;90;-a;pj9&-j;dq;-3;0;-5;0;-j;dq;-9;pnz&-m;0;-5;0;-g;ds;du&-j;9m;-3;0;-5;0;-j;dw;-9;9o;9q&-m;0;-5;0;-g;po7&-m;0;-5;0;-g;po9&-m;0;-5;0;-1b;e2&-m;0;-5;0;-i;pod&e6;-j;e6;-2;0;-5;0;-j;e6;-4;e6;-e;e6;-e;pof;-2;2tj3;-2;e6;-2;e6;-a;pof&-m;0;-5;0;-m;e8&-j;poj;-2;1eyr;-2;ea;pa9;-6;ea;-6;ea;-9;ea;-11;ea;-c;poj;-9;ea;-h;ea&-j;pol;-2;1eyt;-2;ec;pa9;-6;ec;-6;ec;-9;ec;-11;ec;-c;pol;-9;ec;-h;ec&-j;pol;-2;1eyt;-2;ec;pa9;-6;ec;-6;ee;-9;ec;-11;ec;-c;pol;-9;ec;-h;ec&-j;a6;a8;-2;eg;aa;ac;-2;ae;pa9;-6;eg;-6;ag;-9;eg;-11;eg;-c;ai;ak;-9;am;-h;ao&ei;-j;ei;-2;0;-5;0;-g;1eyz;-4;por;-e;ei;-e;por;-2;2tjf;-2;ei;-2;ei;-a;por&-m;0;-5;0;-m;ek&-m;0;-5;0;-m;em&-m;0;-5;0;-l;88;-g;1ez5;-2;pox;-9;eo&-m;0;-5;0;-m;eq&-m;0;-5;0;-11;es;ey;f2;-2;f6;fa;-9;fe&-m;0;-5;0;-m;fg&-m;0;-5;0;-m;fi&-m;0;-5;0;-12;fk;fm;-2;fo;f8;-9;fq&-k;fs;-2;0;-5;0;-m;ew;-g;pp5;-2;pp5;-9;ew;-1b;fu&-m;0;-5;0;-m;ew;-g;pp5;-2;pp5;-9;ew&-j;pq5;-2;2tkt;0;-d;fw;-5;pq5;-2;pq5;-1a;fw;-3;pq5;-9;fw&-j;pq7;-2;2tkv;0;-d;fy;-5;pq7;-2;pq7;-1a;fy;-3;pq7;-9;fy&-j;g2;g4;-2;g0;g6;g8;ga;gc;0;-d;ge;-5;pq9;-2;pq9;-1a;g0;-3;gg;gi;-9;gk&-k;gm;-2;0;-5;0;-1n;gm;-d;pqv&-m;0;-5;0;-i;pqx&-m;0;-5;0;-d;gq&-j;ba;bc;-2;gs;be;bg;bi;bk;0;-d;bm;-5;pr3;-2;gw;gu;-1a;gy;-3;bo;bq;-9;bs&-k;6o;-2;0;-5;0;-i;6o;-1i;pgx&-m;0;-5;0;-h;h0;-5;h0;-8;pr9&h2;-j;h2;-2;0;-5;0;-i;s;-5;h2;-e;h2;-e;prb;-2;2tlz;-2;h2;-2;h2;-a;prb&-m;c8;-5;0;-d;ca;-9;h4&-m;h6;-5;0;-d;h6;-9;h6&-m;h8;-5;0;-d;h8;-9;h8&ha;-j;ha;-2;0;-5;0;-g;1f1r;-4;prj;-7;prj;-6;ha;-e;prj;-2;2tm7;-2;ha;-2;ha;-a;prj&-m;0;-5;0;-h;hc;-5;hc;-8;prl&-m;0;-5;0;-h;he;-5;he;-8;prn&hg;-j;hg;-2;0;-5;0;-g;1f1x;-4;prp;-7;hg;-7;hg;-e;prp;-2;2tmd;-2;hg;-2;hg;-a;prp&hi;-j;hi;-2;0;-5;0;-g;1f1z;-4;prr;-8;hi;-6;hi;-e;prr;-2;2tmf;-2;hi;-2;hi;-a;prr&-m;0;-5;0;-g;prt&-m;0;-5;0;-1p;hm;-5;ho;hq&-m;0;-5;0;-1p;hs;-5;ps1&hu;-j;hu;-2;0;-5;0;-g;hw;-2;hu;-5;hu;-e;hu;-e;ps3;-2;2tmr;-2;hu;-2;hu;-a;ps3&-m;0;-5;0;-l;hy&i0;-j;i0;-2;0;-5;0;-g;i0;-2;i0;-5;i0;-e;i0;-e;ps9;-2;2tmx;-2;i0;-2;i0;-a;ps9&i2;-j;i2;-2;0;-5;0;-g;1f2j;-5;i2;-e;i2;-e;psb;-2;2tmz;-2;i2;-2;i2;-a;psb&8q;-j;8q;-2;0;-5;0;-g;1et7;-5;8q;-7;8w;-7;8q;-e;piz;-2;2tdn;-2;8q;-2;8q;-a;piz&i4;-j;i4;-2;0;-5;0;-g;1f2l;-4;psd;-8;i4;-6;i4;-e;psd;-2;2tn1;-2;i4;-2;i4;-a;psd&-m;0;-5;0;-h;i6;-5;i6;-8;psf&-m;0;-5;0;-h;i8;-5;i8;-8;psh&ia;-j;ic;-2;0;-5;0;-i;ia;-3;54;-2;ia;-9;56;-3;58;-2;ia;-e;psj;-2;2tn7;-2;ia;-2;ia;-a;ie;ig&-k;2;-2;0;-5;0;-j;ii;-i;6;-i;8;a;c;e;-2;g;-c;i;k&ik;-j;ik;-2;0;-5;0;-i;ik;-2;pst;-2;ik;-9;ik;-3;ik;-2;ik;-e;pst;-2;2tnh;-2;ik;-2;ik;-a;pst&-k;2;-2;0;-5;0;-j;im;-i;6;-i;8;a;c;e;-2;g;-c;i;k&io;-j;io;-2;0;-5;0;-g;1f35;-5;io;-e;io;-e;psx;-2;2tnl;-2;io;-2;io;-a;psx&iq;-j;iq;-2;0;-5;0;-g;1f37;-4;psz;-7;iq;-7;iq;-e;psz;-2;2tnn;-2;iq;-2;iq;-a;psz&-j;is;-3;0;-5;0;-j;is;-9;pt1&iu;-j;iu;-2;0;-5;0;-i;iu;-5;iu;-e;iu;-e;pt3;-2;2tnr;-2;iu;-2;iu;-a;pt3&-m;0;-5;0;-g;pt5&-k;iy;-2;iy;-5;0;-7;iy;-9;pt7;-5;iy;-f;iy;-e;pt7;-2;2tnv;-2;iy;-2;iy;-a;pt7&-j;pt9;-2;1f3h;-2;j0;pa9;-6;j0;-6;j0;-9;j0;-11;j0;-c;pt9;-9;j0;-h;j0&-j;ptb;-2;1f3j;-2;j2;pa9;-6;j2;-6;j2;-9;j2;-11;j2;-c;ptb;-9;j2;-h;j2&j4;-j;j4;-2;0;-5;0;-g;1f3l;-4;ptd;-7;ptd;-6;j4;-e;ptd;-2;2to1;-2;j4;-2;j4;-a;ptd&j6;-j;j6;-2;0;-5;0;-g;1f3n;-4;ptf;-7;ptf;-6;j6;-e;ptf;-2;2to3;-2;j6;-2;j6;-a;ptf&-k;2;-2;0;-5;0;-i;bu;-1i;i;k&-j;pth;-2;0;-5;0;-20;pth&-j;aw;2;-2;0;-5;0;-20;i;k&-k;j8;-2;0;-5;0;-20;pth&-j;ja;-3;0;-5;0&-j;ptl;-2;2to9;0;-d;jc;-5;ptl;-2;ptl;-1a;jc;-3;ptl;-9;jc&-m;0;-5;0;-m;je;-g;ptn;-2;ptn;-9;je&-j;ptp;-2;2tod;0;-d;jg;-5;ptp;-2;ptp;-1a;jg;-3;ptp;-9;jg&-m;0;-5;0;-i;ptr;-3;ji&-j;jm;jo;-2;jk;jq;js;ju;jw;0;-d;jy;-5;ptt;-2;ptt;-1a;jk;-3;k0;k2;-9;k4&-j;ptt;-2;2toh;0;-d;jk;-5;ptt;-2;ptt;-1a;jk;-3;ptt;-9;jk&-m;0;-5;0;-1x;k6&k8;-j;k8;-2;0;-5;0;-g;1f4p;-4;puh;-7;puh;-6;k8;-e;puh;-2;2tp5;-2;k8;-2;k8;-a;puh&-m;ka;-5;0;-d;ka;-9;ka&-m;0;-5;0;-m;kc&-j;ba;bc;-2;ke;be;bg;bi;bk;0;-d;bm;-1m;bo;bq;-9;bs&-m;0;-5;0;-1p;kg&-k;ki;-2;ki;-5;0;-7;ki;-9;pur;-5;ki;-f;ki;-e;pur;-2;2tpf;-2;ki;-2;ki;-a;pur&-m;0;-5;0;-1p;kk&-m;0;-5;0;-1n;km&ko;-j;2;-2;0;-5;0;-n;4;-e;6;-i;8;a;c;e;-2;g;-c;i;k&kq;-j;kq;-2;0;-5;0;-g;hw;-2;kq;-5;kq;-e;kq;-e;puz;-2;2tpn;-2;kq;-2;kq;-a;puz&ks;-j;ks;-2;0;-5;0;-i;ks;-5;ks;-e;ks;-e;pv1;-2;2tpp;-2;ks;-2;ks;-a;pv1&-k;ku;-2;0;-5;0;-j;ku;-i;ku;-e;pv3;-2;2tpr;-2;ku;-2;ku;-a;pv3&kw;-j;kw;-2;0;-5;0;-i;kw;-5;kw;-e;kw;-e;pv5;-2;2tpt;-2;kw;-2;kw;-a;pv5&-m;0;-5;0;-g;pv7&-m;0;-5;0;-i;l0;l2&-m;0;-5;0;-m;l4&-m;0;-5;0;-m;ew&-m;0;-5;0;-m;eo&-m;0;-5;0;-m;l6&-m;0;-5;0;-m;l8;-g;pvh;-2;pvh;-9;l8&-m;0;-5;0;-15;la;-a;lc&-m;0;-5;0;-i;pvn;-3;le&-m;0;-5;0;-12;lg;li&-j;pvt;-2;2tqh;0;-d;lk;-9;lk;-1d;pvt;-9;lk&-m;0;-5;0;-h;lm;-5;lm;-8;pvv&-j;lq;ls;-2;lu;lw;ly;m0;m2;0;-d;m4;-8;gw;lo;-1d;m6;m8;-9;ma&-j;pvx;-2;2tql;0;-d;lo;-9;lo;-1d;pvx;-9;lo&-k;mc;-2;mc;-5;0;-7;mc;-9;pwl;-5;mc;-f;mc;-e;pwl;-2;2tr9;-2;mc;-2;mc;-a;pwl&-j;ba;bc;-2;ke;be;bg;bi;bk;0;-d;bm;-9;me;-1d;bo;bq;-9;bs&-m;0;-5;0;-1p;mg;-5;pwp&-m;0;-5;0;-m;mi&-m;0;-5;0;-m;mk&-m;0;-5;0;-m;mm&mo;-j;mo;-2;0;-5;0;-g;mo;-2;mo;-5;mo;-e;mo;-e;pwx;-2;2trl;-2;mo;-2;mo;-a;pwx&-m;0;-5;0;-j;mq&-j;ms;-3;0;-5;0;-j;ms;-9;px1&-j;px3;-2;0;-5;0;-20;px3&-j;px5;-2;0;-5;0;-20;px5&-j;px7;-2;2trv;0;-d;my;-5;px7;-2;px7;-1a;my;-3;px7;-9;my&-j;px9;-2;2trx;0;-d;n0;-9;n0;-1d;px9;-9;n0&n2;-j;n2;-2;0;-5;0;-i;n2;-3;n2;-2;n2;-9;n2;-3;n2;-2;n2;-e;pxb;-2;2trz;-2;n2;-2;n2;-a;pxb&-j;n4;-3;0;-5;0;-j;n4;-9;pxd&-m;0;-5;0;-m;n6&-m;0;-5;0;-m;n8&-k;2;-2;0;-5;0;-j;na;-i;6;-i;8;a;c;e;-2;g;-c;i;k&-k;nc;-2;0;-5;0;-j;nc;-i;nc;-e;pxl;-2;2ts9;-2;nc;-2;nc;-a;pxl&ne;-j;ne;-2;0;-5;0;-i;ne;-5;ne;-e;ne;-e;pxn;-2;2tsb;-2;ne;-2;ne;-a;pxn&-k;2;-2;0;-5;0;-j;ng;-i;6;-i;8;a;c;e;-2;g;-c;i;k&ni;-j;ni;-2;0;-5;0;-i;ni;-5;ni;-e;ni;-e;pxr;-2;2tsf;-2;ni;-2;ni;-a;pxr|-2;8m;a;5o;2;6;c;-3;e;-5;4;-3;1k;-6;1m;-8;1i;-15;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-24;26;-h;1g&-24;1e;2w;-6;2u;14;16;-2;18;-2;1a;-4;1g&-23;32;-c;34&-22;3m;-2;1e;3g;-6;12;14;16;-2;18;-2;1a;-4;1g&-2x;3k;10&-1y;64;3o;6o;-2;1c;-2;1e;u;3q;3s;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-b;9m;-1j;48;-3;44&-j;4e;-1e;4i&-2x;4k;10&-2f;4o;-i;4m;10&-2f;4o&-2m;68;4w;4y;-2;4q;56;-2;52;-5;58;54&-2x;5a;10&-28;m;60;5c;-n;k;10&-2f;5g&-n;5i;-4;5k;5m;5q;5w;5u;-m;5s;-1g;62;10&-y;66;6a;7i;-2;6c;6e;6i;6m;-3;6q;-3;6k;6u;-2;6s;-3;6w;-9;6g;-17;6y;10&-24;1e;74;-6;2u;14;16;-2;18;-2;1a;-4;1g&-2x;4m;10&-1v;7a&-1w;7e&-2e;7k&-2p;7u&-21;7w;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-2i;9i&-p;8o;8k&-3;8q;-3;6;c;-3;e;-5;8s;-3;1k;-6;1m;-8;1i;-15;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-22;1c;-2;1e;u;8w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-2r;8y;-2;52;-5;58;54&-11;96&-1y;64;98;-3;1c;-2;1e;u;3q;3s;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-16;9e;9a;-2;9k;9c&-s;9q;5q;5w;5u;-m;5s;-1g;62;10&-r;9u;5m;5q;5w;5u;-m;5s;-1c;9w;-4;62;9y;54&-1x;a4&-1q;ac;-17;ae;10&-h;ak;-3;ai;ag;am;-16;as&-3k;b2;ba;b0&-1c;bk;-2;6s;-3;6w;-1g;62;10&-13;bs;6i;6m;-3;6q;-3;6k;6u;bu;6s;-3;6w;by;-4;c8;cc;c0;c2;-2;cg;-2;da;-14;bw;10&-2w;dc;-4;ci;-2;cm&-2m;68;d2;-4;56;-2;52;-5;58;54&-p;dg&-3;a;he;-2;6;c;-3;e;-5;di;-3;1k;-6;1m;-8;1i;-15;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-1f;dm;dk&-s;ds;5q;5w;5u;-m;5s;-1g;62;10&-s;du;5q;5w;5u;-m;5s;-1g;62;10&-16;dy&-19;e0&-10;7i;-2;e2;6e;6i;6m;-3;6q;-3;6k;6u;-2;6s;-3;6w;-9;6g;-17;6y;10&-2g;e6;-h;e8;10&-d;es;ea;-m;7i;-2;ee;6e;6i;6m;-3;6q;-3;6k;6u;-2;6s;-3;6w;-9;6g;-17;6y;10&-14;ei;6m;-3;6q;-4;ek;-2;6s;-3;6w;-1g;62;10&-1c;em;-2;6s;-3;6w;-1g;62;10&-1c;f2;-2;6s;-3;6w;-1g;62;10&-11;f0&-k;ai;f6;am;-16;as&-3k;fg&-1j;fy&-1j;gu;go;gs&-30;gc&-2s;gi;-8;ci;-2;gk&-1f;gy&-21;h0;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-2j;h4&-3k;b2;ba;hc&-16;9e;9a&-e;hg;-m;7i;-2;ee;6e;6i;6m;-3;6q;-3;6k;6u;-2;6s;-3;6w;-9;6g;-17;6y;10&-6;6;hk;-2;ju;-1s;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-6;6;hk;-2;k0;-1s;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10&-m;hq;-16;as&-2m;68;4w;4y;-2;hu;56;-2;52;-5;58;54&-1n;hw;-2;hy;-2;cg;-2;da;-14;i0;10&-1n;i2;-2;hy;-2;cg;-2;da;-14;i0;10&-2x;i6;10&-2x;ia;10&-1p;ic;-18;i0;10&-2u;ie;io;ii;-4;ci;-2;cm&-c;iy;-4;iu;-b;is;5m;5q;5w;5u;-m;5s;-1c;iw;-4;62;9y;54&-10;7i;-2;j0;6e;6i;6m;-3;6q;-3;6k;6u;-2;6s;-3;6w;-9;6g;-17;6y;10&-1k;ja&-1l;jg&-30;ci;-2;gk&-2u;jk;-2;ii;-4;ci;-2;cm&-1n;jq;-2;hy;-2;cg;-2;da;-14;i0;10&-1n;js;-2;hy;-2;cg;-2;da;-14;i0;10&-6;6;jw;-1u;8;1c;-2;1e;u;1w;-2;m;1s;g;12;14;16;-2;18;-2;1a;-3;1q;1g;-c;k;10|0;-f;2;-9;4;-2;6;-5;8;a;-2;c;e;g;i;k;-2;m;-4;o;-8;2;q;s;u;-2;w;-4;y;2;-3;10;-8;12;-2;14;-2;16;-6;18;-6;1a;1c;-6;1e;-5;1g;1i;-6;a;-2;1k;-2;1m;-4;1o;-4;1q;-3;1s;-4;1u;2;1w;-3;1y;-3;20;-2;22;-6;24;26;28;-7;2a;2c;2e;2g;-4;2i;-3;2k;2m;-4;2o;2q;-2;2s;2u;-2;2w;2y;-2;30;-4;32;-6;34;-4;36;-d;38;-e;3a;-4;26;3c;-5;3e;-d;3g;-4;3i;-a;3k;3m;-5;3o;-2;3q;-4;3s;3u;-2;3w;-3;3y;-9;40;-6;42;44;-a;3e;-2;46;-2;48;4a;-4;4c;-6;1i;-4;4e;-3;4g;-7;4i;-2;4k;-4;4m;-3;4o;-b;4q;-3;4s;-7;4u;-3;4u;-2").split("|").map(e=>e.split("&")).map(a => a.map(s => s.split(";").map(s=>parseInt(s,36))).map(s=>s.flatMap(d=>d<0?(new Array(-d-1)).fill(-1):(new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));