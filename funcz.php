<?php
function font($color, $face, $size, $cont) {
         return "  <font color=\"".$color."\" face=\"".$face."\" size=\"".$size."\">".$cont."\n  </font>";
}
function input($atrib, $val) {
	$txt0 = array("accesskay", "autofocus", "disabled", "alt", "align", "form", "accept", "name", "step", "src", "size", "required", "readonly", "placeholder", "pattern", "multiple", "min", "maxlength", "max", "list", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "checked", "border", "autofocus", "autocomplete", "type", "value", "class", "contenteditable", "tabindex", "contextmenu", "dir", "hidden", "id", "lang", "spellcheck", "style", "title", "xml:lang");
	   $txt1 = "  <input ";
	   if (is_array($atrib)) {
                   $count = count($atrib);
		   for ($i = 0; $i <= $count - 1; $i++) {
			   if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[13]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[14]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[15]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[16]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[17]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[18]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[19]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[20]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[21]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[22]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[23]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[24]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[25]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[26]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[27]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[28]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[29]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[30]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[31]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[32]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[33]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[34]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[35]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[36]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[37]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[38]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[39]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[40]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[41]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[42]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
		   } 
	   $txt1 .= ">";
	   return $txt1;
	   } else {
		   $txt1 .= $atrib."=\"".$val."\" >\n";
		   return $txt1;
	   }
}
function button($atrib, $val, $cont) {
	       $txt0 = array("accesskay", "autofocus", "disabled", "form", "name", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "type", "value", "class", "contenteditable", "tabindex", "contextmenu", "dir", "hidden", "id", "lang", "spellcheck", "style", "title", "xml:lang");
	   $txt1 = "  <button ";
	   if (is_array($atrib)) {
                   $count = count($atrib);
		   for ($i = 0; $i <= $count - 1; $i++) {
			   if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[13]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[14]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[15]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[16]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[17]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[18]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[19]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[20]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[21]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[22]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[23]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
		   } 
	   $txt1 .= ">".$cont."</button>\n";
	   return $txt1;
	   } else {
		   $txt1 .= $atrib."=\"".$val."\" >";
	       $txt1 .= $cont."</button>\n";
		   return $txt1;
	   }
}
function textarea($atrib, $val, $cont) {
       $txt0 = array("accesskay", "autofocus", "cols", "disabled", "form", "name", "maxlength", "placeholder", "readonly", "required", "rows", "tabindex", "wrap", "class", "contenteditable", "tabindex", "contextmenu", "dir", "hidden", "id", "lang", "spellcheck", "style", "title", "xml:lang");
	   $txt1 = "  <textarea ";
	   if (is_array($atrib)) {
                   $count = count($atrib);
		   for ($i = 0; $i <= $count - 1; $i++) {
			   if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[13]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[14]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[15]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[16]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[17]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[18]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[19]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[20]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[21]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[22]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[23]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[24]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
		   } 
	   $txt1 .= ">\n".$cont."  </textarea>\n";
	   return $txt1;
	   } else {
		   $txt1 .= $atrib."=\"".$val."\" >\n";
	       $txt1 .= $cont."\n  </textarea>\n";
		   return $txt1;
	   }
}
function form($atrib, $val, $cont) {
       $txt0 = array("accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target", "accesskey", "class", "contextmenu", "dir", "lang", "spellcheck", "style", "tabindex", "title", "xml:lang", "id");
	   $txt1 = "  <form ";
	   if (is_array($atrib)) {
                  $count = count($atrib);
		   for ($i = 0; $i <= $count - 1; $i++) {
			   if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[13]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[14]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[15]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[16]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
			   if ($atrib[$i] == $txt0[17]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                           if ($atrib[$i] == $txt0[18]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
		   } 
	   $txt1 .= ">\n".$cont."\n  </form>\n";
	   return $txt1;
	   } else {
		   $txt1 .= $atrib."=\"".$val."\" >\n";
	       $txt1 .= $cont."\n  </form>\n";
		   return $txt1;
	   }
}	   
function code($php) {
      return "\n  <code lang=\"en\">".$php."\n  </code>";
}
function head($meta_http_equiv, $meta_content, $link, $title) {
            $title = "  <title>".$title."</title>";
            $count0 = count($link);
            $count1 = count($link[0]);
            $row = "";
        for ($i = 0; $i <= $count0 - 1; $i++) {
         for ($c = 0; $c <= $count1 - 1; $c++) {
          if (($link[$i][0] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "  <link rel=\"".$link[$i][$c];
          if (($link[$i][1] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "\" href=\"".$link[$i][$c];
          if (($link[$i][2] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "\" type=\"".$link[$i][$c];
          if (($link[$i][3] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "\" charset=\"".$link[$i][$c];
          if (($link[$i][4] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "\" media=\"".$link[$i][$c];
          if (($link[$i][5] == $link[$i][$c]) && ($link[$i][$c] !== "")) $row .= "\" sizes=\"".$link[$i][$c];
            }
     $row .= "\" />\n";
    }
      return " <head>\n  <meta http-equiv=\"".$meta_http_equiv."\" content=\"".$meta_content."\" />\n".$row.$title."\n </head>\n";
}
function div($atrib, $val, $cont) {
$txt0 = array("accesskey", "class", "contenteditable", "contextmenu", "dir", "hidden", "id", "lang", "spellcheck", "style", "tabindex", "title", "xml:lang", "align");
$count = count($txt0);
$txt1 = "  <div ";
if (is_array($atrib)) {
$count = count($txt0);
for ($i = 0; $i <= $count - 1; $i++) {
                if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                if ($atrib[$i] == $txt0[13]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
         }
    $txt1 .= ">\n".$cont."  </div>\n";
    return $txt1;
} else {
        $txt1 .= $atrib."=\"".$val."\" >\n";
        $txt1 .= $cont."\n  </div>\n";
        return $txt1;
}
}
function big($txt, $size) {
                  $txt0 = "  <big>";
                  $txt1 = "  </big>\n";
                  $ttt0 = "  ";
                  $ttt1 = "";
              if ($size == 1) {
                                $ttt0 .= $txt0;
                                $ttt1 .= $txt1;
                              }
              if (($size !== 1) && ($size >= 0)) {
                  for ($i = 0; $i <= $size - 1; $i++) {
                                               $ttt0 .= $txt0;
                                               $ttt1 .= $txt1;
                                               } 
                                }
              return $ttt0.$txt.$ttt1;
}
function script($atrib, $val) {
             $count0 = count($atrib);
             $txt0 = array("async", "defer", "language", "src", "type");
             $txt1 = "";
             for ($i = 0; $i <= $count0 - 1; $i++) {
               if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
               if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
               if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
               if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
               if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
              }
             $txt1 .= ">";
             $txt2 = "  <script ".$txt1."\n  </script>\n";
      return $txt2;
}
function noscript($txt) {
      return "  <noscript>\n".$txt."\n  </noscript>\n";
}
function footer($txt) {
      return "  <footer>".$txt."</footer>\n";
}
//______________________________
function aside($txt, $atrib, $val) {
              $count0 = count($atrib);
              $txt0 = array("accesskey", "class", "contenteditable", "contextmenu", "dir", "hidden", "id", "lang", "spellcheck", "style", "tabindex", "title", "xml:lang");
              $txt1 = "";
              for ($i = 0; $i <= $count0 - 1; $i++) {
                  if ($atrib[$i] == $txt0[0]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[1]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[2]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[3]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[4]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[5]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[6]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[7]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[8]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[9]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[10]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[11]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" ";
                  if ($atrib[$i] == $txt0[12]) $txt1 .= $atrib[$i]."=\"".$val[$i]."\" "; 
                 }
                  //if ($count0 - 1 == $i) $txt1 .= $atrib[$i]."=\"".$val[$i]."\"";
                $txt1 .= ">\n"; 
                $txt2 = "  <aside ".$txt1.$txt."  </aside>\n"; 
                return $txt2; 
}
//____________________________"Тег '<video>' имеет 8 аргументов."_________________________________________
function video($autoplay = "", $controls = "", $loop = "", $preload = "", $src = "", $height = "", $width = "", $poster = "") {
                            $txt = "   <video";
                            if ($autoplay !== "") $txt .= " autoplay=\"autoplay\"";    // Если аргумент активизирован, то видео при загрузке начинает проигрываться автоматически.
                            if ($controls !== "") $txt .= " controls=\"controls\"";    // Если фргумент не активирован, тег не отображается в браузере.
                            if ($loop !== "")     $txt .= " loop=\"loop\"";            // Зацикливает воспроизведение видео, оно повторяется каждый раз с начала после завершения.
                            if ($preload !== "")  $txt .= " preload=\"".$preload."\""; // аргумент "none" - не загружать видео файл, "metadata" - загрузить только служебную информацию, "auto" - Загрузить видеофайл целиком при загрузке страницы.
                            if ($src !== "")      $txt .= " src=\"".$src."\"";         // Задаёт путь к проигрываемому файлу.
                            if ($height !== "")   $txt .= " height=\"".$height."\"";   // Высота изображения
                            if ($width !== "")    $txt .= " width=\"".$width."\"";     // Ширина изображения.
                            if ($poster !== "")   $txt .= " poster=\"".$poster."\"";   // Указывает адрес картинки, которая будет отображаться, пока видео не доступно или не вопроизводится.
                            $txt .= ">\n   Ваш браузер не поддерживает воспроизведение этого видео.\n   </video>";
                            return $txt;
}
//_____________________________"Тег '<audio>' имеет 5 аргументов."_________________________________________________
function audio($autoplay = "", $controls = "", $loop = "", $preload = "", $src = "") {
                            $txt = "   <audio";
                            if ($autoplay !== "") $txt .= " autoplay=\"autoplay\"";    // Если аргумент активизирован, то аудио при загрузке начинает проигрываться автоматически.
                            if ($controls !== "") $txt .= " controls=\"controls\"";    // Если фргумент не активирован, тег не отображается в браузере.
                            if ($loop !== "")     $txt .= " loop=\"loop\"";            // Зацикливает воспроизведение видео, оно повторяется каждый раз с начала после завершения.
                            if ($preload !== "")  $txt .= " preload=\"".$preload."\""; // аргумент "none" - не загружать аудио файл, "metadata" - загрузить только служебную информацию, Загрузить аудиофайл целиком при загрузке страницы.
                            if ($src !== "")      $txt .= " src=\"".$src."\"";         // Задаёт путь к проигрываемому файлу.
                            $txt .= ">\n   Ваш браузер не поддерживает воспроизведение этой музыки.\n   </audio>";
                            return $txt;
}
//______________________________"Тег '<article>' задает содержание сайта вроде новости, статьи, записи блога, форума или др. имеет 1 аргумент."____________________________________________
function article($txt) {
							 $txt = "  <article>\n".$txt."\n  </article>";
							 return $txt;
}
/*____________________________"Тег Тег <meta>" определяет метатеги, которые используются для хранения информации предназначенной для браузеров и поисковых систем. Например, механизмы поисковых систем обращаются к метатегам для получения описания сайта,
ключевых слов и других данных. Разрешается использовать более чем один метатег, все они размещаются в контейнере <head>. Как правило, атрибуты любого метатега сводятся к парам «имя=значение», которые определяются ключевыми словами content, name или http-equiv.
Тег имеет 4 аргумента____________________________*/
function meta($charset, $name = "", $http_equiv = "", $content = "") {
                            $a1 = array(" charset=\"", "\" content=\"", "\" http-equiv=\"", "\" name=\"", "<meta", "\">");
                            $ret = "";
							if ($charset !== "") $ret .= $a1[4].$a1[0].$charset;         // Указывает кодировку.
                            if ($name !== "") $ret .= $a1[3].$name;                      // Любой подходящий идентификатор. Некоторые допустимые значения атрибута name: author, description, keywords.
							if ($http_equiv !== "") $ret .= $a1[2].$http_equiv;          // http-equiv принимает значения: Content-Type, expires, pragma, refresh.
							if ($content !== "") $ret .= $a1[1].$content;				  // Атрибут задает значение, связанное с атрибутами name и http-equiv, в зависимости от контекста.
							$ret .= $a1[5];
							return $ret;
}
//________________________"Акроним почти тоже что и абривеатура имеет 2 аргумента."_________________________________________
function acronym($text, $text0) {
							 $ret = "<acronym title=\"".$text."\">".$text0."</acronym>";  // 1-й Аргумент $text задаёт акроним, 2-й $text задаёт пояснение акронима.
							 return $ret;
}
//___________________________"Тег '<map>' имеет 3 аргумента 1-й id карты 2-й Имя карты 3-й вложенный тег."__________________________________________
function map($id = "", $name = "", $area = "") {
							$x1 = "\n   <map id=\"".$id."\" name=\"".$name."\">\n";
							$x2 = "\n   </map>";
							return $x1.$area.$x2;
}
//__________________________"Тег изображения '<img>'"_________________________________________
function img($src, $alt = "", $height = "", $width = "", $align = "", $usemap = "", $border = "", $hspace = "", $vspace = "", $ismap = "", $longdesc = "", $lowscr = "") {
							$txt = "  <img src=\"".$src."\" alt=\"".$alt."\"";       // 1-й тег ссылка на файл, 2-й тег альтернативная запись.
							if ($height !== "") $txt .= " height=\"".$height."\""; //3 Высота изображения.
							if ($width !== "") $txt .= " width=\"".$width."\"";    //4 Ширина изображения.
							if ($align !== "") $txt .= " align=\"".$align."\"";    //5 Выравнивание блока текста по краю. Значения: left, center, right, justify.
							if ($usemap !== "") $txt .= " usemap=\"".$usemap."\""; //6 Ссылка на тег <map>, содержащий координаты для клиентской карты-изображения.
							if ($border !== "") $txt .= " border=\"".$border."\""; //7 Толщина рамки вокруг изображения.
							if ($hspace !== "") $txt .= " hspace=\"".$hspace."\""; //8 Горизонтальный отступ от изображения до окружающего контента.
							if ($vspace !== "") $txt .= " vspace=\"".$vspace."\""; //9 Вертикальный отступ от изображения до окружающего контента.
							if ($ismap !== "") $txt .= " ismap=\"".$ismap."\"";    //10 Говорит браузеру, что картинка является серверной картой-изображением.
							if ($longdesc !== "") $txt .= " longdesc=\"".$longdesc."\""; //11 Указывает адрес документа, где содержится аннотация к картинке.
							if ($lowscr !== "") $txt .= " lowscr=\"".$lowscr."\""; //12 Адрес изображения низкого качества.
							$txt .= " />\n";
							return $txt;
}
//_________________________"Тег HTML функция содержит 2 аргумента. 1-й head, 2-й body"____________________________________
function html($head, $body) {
                                $html = $head.$body;
				return "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n".$html."</html>";
}
//_________________________________"Тег BODY"________________________________________________
function body($body)  {
									  $b0 = " <body>\n";
									  $b1 = " </body>\n";
							        return $b0.$body.$b1;
}
//______________________ "Функция 'Заголовок'"_______________________________________
function h($a, $b) {              // Тело функции.
                                  // Объявляем переменные для функции.
                                         $a5 = "h";
                                         $a1 = "<";
                                         $a2 = ">";
                                         $a3 = "/";
                                         $a6 = "Аргумент превышает допустимый диапазон значений! Диапазон должен быть в пределах от \"1\" до \"6\" включительно";
                   if (($a > 0) && ($a < 7)) { // Выполнение условия. Если Да, то 1 вариант, если нет, то 2 вариант.
                                             $a4="  ".$a1.$a5.$a.$a2.$b.$a1.$a3.$a5.$a.$a2."\n";    // Инструкция 1  1 вариант.
                                      return $a4;                                    // Инструкция 2
                                             } else {    // Если не это то следующее.
                                                    return '<h1>'.$a6.'</h1>';              // Инструкция 3  2 вариант.
                                                    }
}                                   // Тело функции.
//______________________ "Функция "Параграф"________________________________________
function p($b) {
                                         $a7 = "   <p>".$b."   </p>\n";
                                         return $a7;
}
//_______________________ "Функция " '<a>' - тег ссылки " _____________________________
function a($href, $txt, $target = "") {
			$a11 = "<";
			 $a21 = ">";
			 $a31 = "/";
			 $str = "<a href=\"".$href."\" target=\"".$target."\"".$a21.$txt."</a>";
			 return $str;
}
// ______________________ "Функция добавления комментариев" ____________________________
function k($a){
                                        return "<!--".$a."-->";
}
// ________________________"DOCTYPE (Тип документа)"__________________________________________
function d($a) {
if ($a == 1) {
        $a = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">";
        return $a."\n";
} elseif ($a == 2) {
        $a = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">";
        return $a."\n";
} elseif ($a == 3) {
        $a = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\" \"http://www.w3.org/TR/html4/frameset.dtd\">";
        return $a."\n";
} elseif ($a == 4) {
        $a = "<!DOCTYPE html>";
        return $a."\n";
} elseif ($a == 5) {
        $a = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">";
        return $a."\n";
} elseif ($a == 6) {
        $a = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
        return $a."\n";
} elseif ($a == 7) {
        $a = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\">";
        return $a."\n";
} elseif ($a == 8) {
        $a = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">";
        return $a."\n";
}
}
/*      1 в аргументе это: Строгий синтаксис HTML.
        2 в аргументе это: Переходный синтаксис HTML.
        3 в аргументе это: В HTML-документе применяются фреймы.
        4 в аргументе это: Для всех документов.
        5 в аргументе это: Строгий синтаксис XHTML.
        6 в аргументе это: Переходный синтаксис XHTML.
        7 в аргументе это: Документ написан на XHTML и содержит фреймы.
        8 в аргументе это: Разработчики XHTML 1.1 предполагают, что он постепенно вытеснит HTML. Никакого деления на виды это определение не имеет, синтаксис один и подчиняется четким правилам. */
// _______________________"Абривиатура. Имеет 2 аргумента. 1-й расшифровка абривиатуры, 2-й абривеатура"_______________________________________
function abbr($a, $b) {
	$a = "<abbr title=\"".$b."\">".$a."</abbr>";
	return $a;
}
// _________________________"Функция заполняющая тег <address> имеет 1 аргумент."_______________________________
function address($a) {
	$a = "<address>".$a."</address>";
	return $a;
}
//__________________________________________________"Функция <area> имеет 10 аргументов 1-й аргумент: адрес файа, 2-й альтернативное описание"______________________________________________________________________________________
function area($href, $alt, $target="", $shape="", $coords="", $type="", $tabindex="", $accesskey="", $hreflang="", $nohref="") { // Функция и её аргументы.
$arrey = array("href=\"", "\" alt=\"", "\" target=\"", "\" shape=\"", "\" coords=\"", "\" type=\"", "\" tabindex=\"", "\" accesskey=\"", "\" hreflang=\"", "\" nohref=\""); // Массив параметров.
$tar = array('s' => "_self", 'b' => "_blank", 'p' => "_parent", 't' => "_top");  // Создаём мапссив аргументов для параметра "target".
$sha = array('d' => "default", 'r' => "rect", 'c' => "circle", 'p' => "poly");   // Создаём строковый массив значений для параметра "shape".
$sum = "";                                                                       // Объявляем переменную для склеивания строк имени и значения параметров тега.
     if ($coords !== "") $coords = implode(", ", $coords);
     if ($target !== "") $sum .= $arrey[2].$tar[$target];
     if ($shape  !== "") $sum .= $arrey[3].$sha[$shape];
     if ($coords !== "") $sum .= $arrey[4].$coords;
     if ($type   !== "") $sum .= $arrey[5].$type;
     if ($tabindex !== "") $sum .= $arrey[6].$tabindex;
     if ($accesskey !== "") $sum .= $arrey[7].$accesskey;
     if ($hreflang !== "") $sum .= $arrey[8].$hreflang;
     if ($nohref !== "") $sum .= $arrey[9].$nohref;
$ret = "<area ".$arrey[0].$href.$arrey[1].$alt.$sum."\" />";
return $ret;
}
/*1. Адрес ссылки. 2. Альтернативное описание. 3. _blank - Загружает страницу в новое окно браузера. _self - Загружает страницу в текущее окно. _parent - Загружает страницу во фрейм-родитель, если фреймов нет, то это значение работает как _self.
_top - Отменяет все фреймы и загружает страницу в полном окне браузера, если фреймов нет, то это значение работает как _self.
4. circle - Область в виде круга. default - Область по умолчанию (прямоугольная). poly - Полигональная область произвольной формы. rect - Прямоугольная область. 5. Массив содержащий координаты. 6. Устанавливает MIME-тип документа, на который ведёт ссылка.
 Этот атрибут носит рекомендательный характер и может использоваться для стилизации ссылок с заданным типом документа. Атрибут type должен добавляться только при наличии атрибута href. 7. Любое целое положительное число, начиная с нуля.
 Значения выстраиваются последовательно и переход между элементами происходит от меньшего значения к большему. 8. Атрибут accesskey позволяет перейти к активной области изображения с помощью некоторого сочетания клавиш с заданной в атрибуте
 буквой или цифрой. Браузеры при этом используют различные комбинации клавиш. Например, для accesskey="s" работают следующие сочетания. 9. Указывает язык документа, на который ведёт ссылка активной области изображения.
 10. Этот атрибут сообщает браузеру, что «горячая область» не является ссылкой. При этом атрибут href не должен включаться. */
?>
