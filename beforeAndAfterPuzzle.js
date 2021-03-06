/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function (phrases) {
  let firstWords = {};
  let splitPhrases = [];

  for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];
    let words = phrase.split(" ");
    let first = words[0];

    if (firstWords[first]) {
      firstWords[first].push(i);
    } else {
      firstWords[first] = [i];
    }

    splitPhrases.push(words);
  }

  let previousCombos = {};
  let newPhrases = [];

  for (let j = 0; j < phrases.length; j++) {
    let phrase = splitPhrases[j];
    let last = phrase[phrase.length - 1];

    if (firstWords[last]) {
      let indices = firstWords[last];
      let phrases = [];

      for (let k = 0; k < indices.length; k++) {
        if (j !== indices[k] && splitPhrases[indices[k]] !== phrase) {
          let newPhrase = phrase.slice();
          newPhrase.pop();
          let positions = [j, indices[k]].sort();

          let endingPhrase = splitPhrases[indices[k]];
          newPhrase = newPhrase.concat(endingPhrase);
          newPhrase = newPhrase.join(" ");

          if (previousCombos[positions]) {
            let word = previousCombos[positions];
            if (word !== newPhrase) {
              newPhrases.push(newPhrase);
            }
          } else {
            previousCombos[positions] = newPhrase;
            newPhrases.push(newPhrase)
          }
        }
      }
    }
  }

  return newPhrases.sort();

};

// var createPhraseDict = function (phrases) {
//   let firstWord, secondPart, lastWord;
//   let dict = {}, i, j;
//   for (i = 0; i < phrases.length; i++) {
//     j = phrases[i].indexOf(" ");
//     if (j > -1) {
//       firstWord = phrases[i].slice(0, j);
//       secondPart = phrases[i].slice(j + 1)
//     } else {
//       firstWord = phrases[i];
//       secondPart = "";
//     }
//     if (firstWord in dict) dict[firstWord].push(secondPart);
//     else dict[firstWord] = [secondPart];
//   }
//   return dict;
// }

// var beforeAndAfterPuzzles = function (phrases) {
//   if (!Array.isArray(phrases) || typeof phrases[0] != "string") return;
//   let output = new Set(), equals = false, secondPart, firstWord, lastWord;
//   let temp;
//   let dict = createPhraseDict(phrases);
//   for (i = 0; i < phrases.length; i++) {
//     equals = false;
//     if (phrases[i].indexOf(" ") === -1) {
//       equals = true;
//       firstWord = phrases[i];
//       secondPart = "";
//       lastWord = firstWord;
//     } else {
//       firstWord = phrases[i].slice(0, phrases[i].indexOf(" "));
//       secondPart = phrases[i].slice(phrases[i].indexOf(" ") + 1);
//       lastWord = phrases[i].slice(phrases[i].lastIndexOf(" ") + 1);
//       if (firstWord == lastWord) equals = true;
//     }
//     if (equals) {
//       temp = dict[firstWord];
//       for (j = 0; j < temp.length; j++) {
//         if (temp[j] === secondPart) {
//           temp.splice(j, 1);
//           break;
//         }
//       }
//     }

//     if (lastWord in dict) {
//       temp = dict[lastWord];
//       for (j = 0; j < temp.length; j++)
//         if (temp[j] === "") output.add(phrases[i]);
//         else output.add(phrases[i] + " " + temp[j]);
//     }

//     if (equals) {
//       dict[firstWord].push(secondPart);
//     }
//   }
//   return Array.from(output).sort();
// };

let input = [
  "ni kntqfmv thyqxe dh xhnbd thyqxe s", 
  "s oqefp kntqfmv l ts nalc dbnt", 
  "l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l", 
  "z ovdqvb qoqhnxt kntqfmv xhnbd j l", 
  "zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd",
  "ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z",
  "qtp ovdqvb dh jymavm kntqfmv zjje qtp qoqhnxt zjje zjje qtp j rhgfzeaz ts z j", 
  "ysvpvc kxi", 
  "nalc zaowxcc kxi", 
  "j nqirao vhyntf j j j jymavm rhgfzeaz zjje ts qtp lirhaxd j", 
  "ysvpvc dbnt zbvntzo qtp trijn", 
  "z nalc qtp qtp ni ts", 
  "dh", 
  "l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh", 
  "vhyntf thyqxe ysvpvc trijn", 
  "zbvntzo vhyntf zaowxcc vhyntf ni z qoqhnxt j zmb l ni", 
  "kntqfmv ni ovdqvb ni zmb oqefp kntqfmv j l zjje zbvntzo nqirao nqirao s", 
  "qtp lirhaxd zbvntzo zjje thyqxe nalc kxi zjje dbnt l z j", 
  "z thyqxe oqefp trijn lirhaxd jymavm zjje", 
  "zaowxcc zaowxcc zaowxcc thyqxe ni", 
  "qoqhnxt lirhaxd zjje vhyntf s", 
  "trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao", 
  "qtp z qoqhnxt oqefp ts oqefp kntqfmv thyqxe s", 
  "zmb ni s nqirao rhgfzeaz nqirao vhyntf rhgfzeaz ovdqvb dbnt vhyntf l l ts", 
  "nqirao thyqxe kxi thyqxe l zmb j nqirao zmb ysvpvc zbvntzo l nalc j ni z ts xhnbd z kntqfmv kxi", 
  "dbnt qoqhnxt zjje", 
  "trijn s", 
  "xhnbd ni qtp j qoqhnxt zjje zaowxcc ni ts dh xhnbd zjje z dh ts", 
  "vhyntf s ovdqvb oqefp z zbvntzo trijn qoqhnxt oqefp trijn kntqfmv qoqhnxt l zaowxcc ni", 
  "l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s"];

  console.log(beforeAndAfterPuzzles(input));


  // Correct Answer:

// [
//   'dbnt qoqhnxt zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd',
//   'kntqfmv ni ovdqvb ni zmb oqefp kntqfmv j l zjje zbvntzo nqirao nqirao s oqefp kntqfmv l ts nalc dbnt',
//   'l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s oqefp kntqfmv l ts nalc dbnt',
//   'l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s',
//   'ni kntqfmv thyqxe dh xhnbd thyqxe s oqefp kntqfmv l ts nalc dbnt',
//   'qoqhnxt lirhaxd zjje vhyntf s oqefp kntqfmv l ts nalc dbnt',
//   'qtp lirhaxd zbvntzo zjje thyqxe nalc kxi zjje dbnt l z j nqirao vhyntf j j j jymavm rhgfzeaz zjje ts qtp lirhaxd j',
//   'qtp ovdqvb dh jymavm kntqfmv zjje qtp qoqhnxt zjje zjje qtp j rhgfzeaz ts z j nqirao vhyntf j j j jymavm rhgfzeaz zjje ts qtp lirhaxd j',
//   'qtp z qoqhnxt oqefp ts oqefp kntqfmv thyqxe s oqefp kntqfmv l ts nalc dbnt',
//   's oqefp kntqfmv l ts nalc dbnt qoqhnxt zjje',
//   'trijn s oqefp kntqfmv l ts nalc dbnt',
//   'trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao thyqxe kxi thyqxe l zmb j nqirao zmb ysvpvc zbvntzo l nalc j ni z ts xhnbd z kntqfmv kxi',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z nalc qtp qtp ni ts',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z ovdqvb qoqhnxt kntqfmv xhnbd j l',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z thyqxe oqefp trijn lirhaxd jymavm zjje',
//   'vhyntf s ovdqvb oqefp z zbvntzo trijn qoqhnxt oqefp trijn kntqfmv qoqhnxt l zaowxcc ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'vhyntf thyqxe ysvpvc trijn s',
//   'vhyntf thyqxe ysvpvc trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao',
//   'xhnbd ni qtp j qoqhnxt zjje zaowxcc ni ts dh xhnbd zjje z dh ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z',
//   'ysvpvc dbnt zbvntzo qtp trijn s',
//   'ysvpvc dbnt zbvntzo qtp trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao',
//   'z nalc qtp qtp ni ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l',
//   'z thyqxe oqefp trijn lirhaxd jymavm zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd',
//   'zaowxcc zaowxcc zaowxcc thyqxe ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'zbvntzo vhyntf zaowxcc vhyntf ni z qoqhnxt j zmb l ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd ni qtp j qoqhnxt zjje zaowxcc ni ts dh xhnbd zjje z dh ts',
//   'zmb ni s nqirao rhgfzeaz nqirao vhyntf rhgfzeaz ovdqvb dbnt vhyntf l l ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z'
// ]

// My Answer:

// [
//   'dbnt qoqhnxt zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd',
//   'kntqfmv ni ovdqvb ni zmb oqefp kntqfmv j l zjje zbvntzo nqirao nqirao s oqefp kntqfmv l ts nalc dbnt',
//   'l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s oqefp kntqfmv l ts nalc dbnt',
//   'l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s',
//   'ni kntqfmv thyqxe dh xhnbd thyqxe s oqefp kntqfmv l ts nalc dbnt',
//   'qoqhnxt lirhaxd zjje vhyntf s oqefp kntqfmv l ts nalc dbnt',
//   'qtp lirhaxd zbvntzo zjje thyqxe nalc kxi zjje dbnt l z j nqirao vhyntf j j j jymavm rhgfzeaz zjje ts qtp lirhaxd j',
//   'qtp ovdqvb dh jymavm kntqfmv zjje qtp qoqhnxt zjje zjje qtp j rhgfzeaz ts z j nqirao vhyntf j j j jymavm rhgfzeaz zjje ts qtp lirhaxd j',
//   'qtp z qoqhnxt oqefp ts oqefp kntqfmv thyqxe s oqefp kntqfmv l ts nalc dbnt',
//   's oqefp kntqfmv l ts nalc dbnt qoqhnxt zjje',
//   'trijn s oqefp kntqfmv l ts nalc dbnt',
//   'trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao thyqxe kxi thyqxe l zmb j nqirao zmb ysvpvc zbvntzo l nalc j ni z ts xhnbd z kntqfmv kxi',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z nalc qtp qtp ni ts',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z ovdqvb qoqhnxt kntqfmv xhnbd j l',
//   'ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z thyqxe oqefp trijn lirhaxd jymavm zjje',
//   'vhyntf s ovdqvb oqefp z zbvntzo trijn qoqhnxt oqefp trijn kntqfmv qoqhnxt l zaowxcc ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'vhyntf thyqxe ysvpvc trijn s',
//   'vhyntf thyqxe ysvpvc trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao',
//   'xhnbd ni qtp j qoqhnxt zjje zaowxcc ni ts dh xhnbd zjje z dh ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z',
//   'ysvpvc dbnt zbvntzo qtp trijn s',
//   'ysvpvc dbnt zbvntzo qtp trijn xhnbd l ni kxi j s j trijn ysvpvc nqirao ts kntqfmv qtp vhyntf trijn j dbnt ts nqirao',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l lirhaxd dh ysvpvc kntqfmv j zjje ysvpvc ysvpvc trijn s dh dh dbnt dh',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l vhyntf trijn dh lirhaxd zmb dbnt vhyntf qoqhnxt ni l j s',
//   'z ovdqvb qoqhnxt kntqfmv xhnbd j l zmb ts thyqxe kxi dh ni ovdqvb dbnt s l j nqirao j l',
//   'z thyqxe oqefp trijn lirhaxd jymavm zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd',
//   'zaowxcc zaowxcc zaowxcc thyqxe ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'zbvntzo vhyntf zaowxcc vhyntf ni z qoqhnxt j zmb l ni kntqfmv thyqxe dh xhnbd thyqxe s',
//   'zjje l s ysvpvc ysvpvc oqefp rhgfzeaz rhgfzeaz zjje nalc jymavm xhnbd j l l nqirao j xhnbd ni qtp j qoqhnxt zjje zaowxcc ni ts dh xhnbd zjje z dh ts',
//   'zmb ni s nqirao rhgfzeaz nqirao vhyntf rhgfzeaz ovdqvb dbnt vhyntf l l ts thyqxe nalc xhnbd ysvpvc l trijn qoqhnxt zaowxcc qtp lirhaxd j xhnbd zbvntzo lirhaxd vhyntf z'
// ]