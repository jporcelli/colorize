<div style="background: #555; width: 85%; border: 1px solid #aeaeae;" id="code_block">
<!-- Insert lines of code block here with each line in a <span> tag , @TODO - this requirement will be depracted shortly -->
</div>

<script>
//Python keywords, identifiers
 var keywords= {
    '#' : '#bbb',
    '"""': '#8f9d6a',
    'def': '#cda869',
    'for': '#cda869',
        'if': '#cda869',
        'else': '#cda869',
    'return': '#cda869',
    'while': '#cda869',
    'in': '#fa8d6a',
    '-': '#fa8d6a',
    '>': '#fa8d6a',
    '<': '#fa8d6a',
    '%': '#fa8d6a',
    '==': '#fa8d6a',
    '/': '#fa8d6a',
    'range': '#9999cc',
    'len': '#9999cc',
    '(': '#E6E1DC',
        ')': '#E6E1DC',
    '.': '#E6E1DC',
        ',': '#E6E1DC',
         '=': '#E6E1DC',
    '[': '#E6E1DC',
    ']': '#E6E1DC',
    ':': '#E6E1DC',
    '[]': '#E6E1DC'
 };

 var variable = '#ffb795';
 var numeric = '#78CF8A';

/**
 * Perform the sytax highlighting,
 */
 (function (){
    var code_block = document.getElementById('code_block');
    var code = code_block.children;
    var lines = code.length;

    for(var i = 0; i < lines; i++){
        var line = code[i];
        var text = line.textContent.trim();

        if(text.charAt(0) === '#'){
            line.style.color = keywords['#'];
        }else{
            tokens = text.split(' ');

            if(tokens[0].trim() === '"""'){
                line.style.color = keywords['"""'];
            }else{
                columns = tokens.length;
                replace_line = [];

                for(var j = 0; j < columns; j++){
                    var cur_token = tokens[j].trim()
                    var key = keywords[cur_token];

                    if(key){
                        var s = document.createElement('span');
                        s.style.color = key;
                        s.textContent = tokens[j] + ' ';
                        replace_line.push(s);
                    }else if(parseInt(cur_token)){
                        var s = document.createElement('span');
                        s.style.color = numeric;
                        s.textContent = tokens[j] + ' ';
                        replace_line.push(s);
                    }else{
                          var original_tok = cur_token;
                                
                        for(var k = 0; k < cur_token.length; k++){
                            var token_char = cur_token.charAt(k);
                                                        
                                                        var sym = keywords[token_char];
                            if(sym){
                                 var s = document.createElement('span');
                                                             s.style.color = sym;
                                                             s.textContent = token_char;
                                                             replace_line.push(s);                  
                            }else if(parseInt(token_char)){
                                                             var s = document.createElement('span');
                                                             s.style.color = numeric;
                                                             s.textContent = token_char;
                                                             replace_line.push(s);  
                                                        }else{
                                                                var s = document.createElement('span');
                                                                s.style.color = variable;
                                                                if(k === cur_token.length - 1){
                                                                        s.textContent = token_char + ' ';
                                                                }else{
                                                                        s.textContent = token_char;
                                                                }
                                                                replace_line.push(s);
                                                        }
                        }
                    }
                }

                line.textContent = '';
                var new_elems = replace_line.length;
                for(var k = 0; k < new_elems; k++){
                    line.appendChild(replace_line[k]);
                }
            }
        }
                 
                line_num = document.createElement('div');
                line_num.textContent = i;
                line_num.style.textAlign = 'right';
                line_num.style.background = '#4d4d4d';
                line_num.style.color = '#999';
                line_num.style.width = '30px';
                line_num.style.left =  '0';
                line_num.style.padding = '7px';
                line_num.style.display ='inline-block';
 
                var pl = line.style.marginLeft;
                var margin_left = (pl !== '')?parseInt(pl.substring(0, pl.indexOf('p'))):0;
                
                line_num.style.marginRight = (margin_left + 15) + 'px';
                line.style.marginLeft = '';

                if(line.insertAdjacentElement === undefined){
                      if(line.children.length === 0){
                          var s =  document.createElement('span');
                          s.textContent = line.textContent;
                          line.textContent = '';
                          line.appendChild(line_num);
                          line.appendChild(s);
                      }else{
                            line.insertBefore(line_num, line.children[0]); 
                      }
                }else{ 
                      line.insertAdjacentElement("AfterBegin", line_num); 
               }     
        }
})();
</script>
