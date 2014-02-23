<div style="background: #555; width: 85%; border: 1px solid #aeaeae;" id="code_block">
<span style="display: block;">
#__author__ James Porcelli
</span>
<span style="display: block;">
""" Insertion sort, O(n) for n = 5 """
</span>
<span style="display: block;">
def insert_sort(s):
</span>
<span style="display: block; margin-left: 15px;">
    for i in range(1, len(s)):
</span>
<span style="display: block; margin-left: 30px;">
        j = i
</span>
<span style="display: block; margin-left: 15px;">
        while j > 0 and s [j - 1] > s[ j ]:
</span>
<span style="display: block; margin-left: 30px;">
            #swap
</span>
<span style="display: block; margin-left: 30px;">
            tmp = s[ j - 1]
</span>
<span style="display: block; margin-left: 30px;">
            s[ j - 1] = s[ j ]
</span>
<span style="display: block; margin-left: 30px;">
            s[ j ] = tmp
</span>
<span style="display: block; margin-left: 30px;">
            j = j - 1
</span>
<span style="display: block;">
""" Partition, O(n) """
</span>
<span style="display: block;">
def partition(a, p, r, k):
</span>
<span style="display: block; margin-left: 15px;">
    x = k
</span>
<span style="display: block; margin-left: 15px;">
    tmp = a[ r ]
</span>
<span style="display: block; margin-left: 15px;">
    a[ r ] = x
</span>
<span style="display: block; margin-left: 15px;">
    a[a.index(k)] = a[ r ]
</span>
<span style="display: block; margin-left: 15px;">
    i = p - 1
</span>
<span style="display: block; margin-left: 15px;">
    for j in range(p, r - 1):
</span>
<span style="display: block; margin-left: 30px;">
        if a[ j ] <= x:
</span>
<span style="display: block; margin-left: 45px;">
            i = i + 1
</span>
<span style="display: block; margin-left: 45px;">
            tmp = a[ i ]
</span>
<span style="display: block; margin-left: 45px;">
            a[ i ] = a[ j ]
</span>
<span style="display: block; margin-left: 45px;">
            a[ j ] = tmp
</span>
<span style="display: block; margin-left: 15px;">
    #swap
</span>
<span style="display: block; margin-left: 15px;">
    tmp = a[ i + 1]
</span>
<span style="display: block; margin-left: 15px;">
    a[ i + 1] = a[ r ]
</span>
<span style="display: block; margin-left: 15px;">
    a[ r ] = tmp
</span>
<span style="display: block; margin-left: 15px;">
    return i + 1 
</span>
<span style="display: block;">
""" Selection in worst case linear time, O(n) """
</span>
<span style="display: block;">
def select(ar, k):
</span>
<span style="display: block; margin-left: 15px;">
    x = len(ar)
</span>
<span style="display: block; margin-left: 15px;">
    #base case
</span>
<span style="display: block; margin-left: 15px;">
    if x < 6:
</span>
<span style="display: block; margin-left: 30px;">
        if x % 2 == 1:
</span>
<span style="display: block; margin-left: 45px;">
            return ar[x/2]
</span>
<span style="display: block; margin-left: 30px;">
        else :
</span>
<span style="display: block; margin-left: 45px;">
            return ar[x/2 - 1]
</span>
<span style="display: block; margin-left: 15px;">
    else :
</span>
<span style="display: block; margin-left: 30px;">
        set_of_medians = [] 
</span>
<span style="display: block; margin-left: 30px;">
        i = 0
</span>
<span style="display: block; margin-left: 30px;">
        #generate 5 tuples
</span>
<span style="display: block; margin-left: 30px;">
        while i < x:
</span>
<span style="display: block; margin-left: 45px;">
            five_tuple = []
</span>
<span style="display: block; margin-left: 45px;">
            if x - i > 5:
</span>
<span style="display: block; margin-left: 60px;">
                for j in range(5):
</span>
<span style="display: block; margin-left: 75px;">
                    five_tuple.append(ar[ i + j ])
</span>
<span style="display: block; margin-left: 75px;">
                i = i + 5
</span>
<span style="display: block; margin-left: 45px;">
            else :
</span>
<span style="display: block; margin-left: 60px;">
                for j in range(x - i):
</span>
<span style="display: block; margin-left: 75px;">
                    five_tuple.append(ar[ i + j ])
</span>
<span style="display: block; margin-left: 75px;">
                i = (i + x) - i
</span>
<span style="display: block; margin-left: 45px;">
            set_of_medians.append(five_tuple)
</span>
<span style="display: block; margin-left: 30px;">
        #sort each 5 tuple
</span>
<span style="display: block; margin-left: 30px;">
        for i in range(len(set_of_medians)):
</span>
<span style="display: block; margin-left: 45px;">
            insert_sort(set_of_medians[ i ])
</span>
<span style="display: block; margin-left: 30px;">
        medians = []
</span>
<span style="display: block; margin-left: 30px;">
        #generate set of medians of each 5 tuple
</span>
<span style="display: block; margin-left: 30px;">
        for i in range(len(set_of_medians)):
</span>
<span style="display: block; margin-left: 45px;">
            if len(set_of_medians[ i ]) == 5:
</span>
<span style="display: block; margin-left: 60px;">
                medians.append(set_of_medians[ i ][2])
</span>
<span style="display: block; margin-left: 45px;">
            else :
</span>
<span style="display: block; margin-left: 60px;">
                if len( set_of_medians[ i ]) % 2 == 1:
</span>
<span style="display: block; margin-left: 75px;">
                    medians.append(set_of_medians[ i ][ len(set_of_medians[ i ]) / 2])
</span>
<span style="display: block; margin-left: 60px;">
                else :
</span>
<span style="display: block; margin-left: 75px;">
                    medians.append( set_of_medians[ i ][ len(set_of_medians[ i ]) / 2 - 1])
</span>
<span style="display: block; margin-left: 30px;">
        #find median of medians
</span>
<span style="display: block; margin-left: 30px;">
        if len(medians) % 2 == 1:
</span>
<span style="display: block; margin-left: 45px;">
            m = select(medians, len(medians)/2)
</span>
<span style="display: block; margin-left: 30px;">
        else :
</span>
<span style="display: block; margin-left: 45px;">
            m = select(medians, len(medians)/2 - 1)
</span>
<span style="display: block; margin-left: 30px;">
        #partition around the median of medians
</span>
<span style="display: block; margin-left: 30px;">
        i = partition(ar, 0, len(ar) - 1, m)
</span>
<span style="display: block; margin-left: 30px;">
        if i == k:
</span>
<span style="display: block; margin-left: 45px;">
            return ar[ i ]
</span>
<span style="display: block; margin-left: 30px;">
        elif k < i:
</span>
<span style="display: block; margin-left: 45px;">
            return select(ar[ : i ], k)
</span>
<span style="display: block; margin-left: 30px;">
        else :
</span>
<span style="display: block; margin-left: 45px;">
            return select(ar[ i + 1 : ], i - k)
</span>
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