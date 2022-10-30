var bind = Function.prototype.bind,
    $append = bind.call(Element.prototype.appendChild, document.querySelector("output")),
    $new = bind.call(Document.prototype.createElement, document),
    $text = bind.call(Document.prototype.createTextNode, document),
    $rnd = function() { return (Math.random() * 125 + 0)|0; },
    $promise = function(thenFn) {
      var args, promise, wait, slice=Array.prototype.slice, isResolved = false;
      var promise = {
        wait: function(ms) {
          wait = ms;
          return promise;
        },
        then: function() {
          args = slice.call(arguments);
          return promise = $promise(thenFn);
        },
        resolve: function() {
          isResolved = true;
          if(args) {
            var next = Function.prototype.bind.apply(thenFn, [undefined].concat(args).concat([promise]));
            wait ? setTimeout(next, wait) : next();
          }

        }
      };
      return promise;
    };

var process = function(target, chars, promise) {
  var first = chars[0], rest = chars.slice(1);
  if(!first) {
    promise.resolve();
    return;
  }
  target.appendChild(first);
  setTimeout(process.bind(undefined, target, rest, promise), $rnd());
}

var type = function(text, promise) {
  var chars = text.split("").map($text);
  promise = promise || $promise(type);
  $append($new("br"));
  process($append($new("q")), chars, promise);
  return promise;
};

//
//
//
//
// "But it will never be over," "Flow" replied. "I will always be with you, haunting you, until you finally snap and kill us all."
type("It was a dark and stormy night. You were driving home from work, feeling tired and stressed from the long day.")
  .wait(2000)
  .then("As you drove, you began to feel more and more tired, and soon you fell asleep at the wheel.")
  .wait(3000)
  .then("You woke up to find yourself in a dark and strange place. You were surrounded by four figures, who you soon realized were your different personalities. \"Document\", \"Executor\", \"Driver\", and \"Flow\".")
  .wait(1500)
    .then("They were all staring at you, and you could feel the anger and hate radiating from them.")
    .wait(3000)
  .then("You tried to run, but \"Driver\" was quickly able to catch you. He grabbed you by the throat and began to strangle you. You gasped for air, but \"Driver\" only tightened his grip.")
    .wait(1000)
    .then("You could feel your life slipping away, and soon everything went black...")
    .wait(5000).then("When you woke up, you were lying in a pool of blood. You felt weak and disoriented, but you could see that \"Driver\" was lying next to you, dead.")
    .wait(2000).then("\"Executor\" was standing over him, a bloody knife in her hand. She looked at you with a cold, psychopathic smile, and you knew that she had just killed \"Driver\".")
    .wait(3000).then("\"Document\" and \"Flow\" were both standing nearby, looking horrified.").wait(2000).then("\"What have you done?\" \"Document\" asked \"Executor\".").wait(2000).then("\"I killed him, just like I'm going to kill you,\" \"Executor\" replied.")
    .wait(1000).then("She lunged at \"Document\", but \"Flow\" quickly grabbed her and held her back. \"Executor\" struggled to break free, but \"Flow\" was too strong. ")
    .wait(2000).then("\"Document\" turned to you and said, \"You need to kill her, before she kills us all!!\"")
    .wait(3000).then("You hesitated for a moment")
    .wait(1000).then("but then you nodded. ")
    .wait(1000).then("You picked up the knife \"Executor\" had dropped, and you stabbed her in the heart. She screamed in pain and rage, but she quickly died.")
    .wait(5000).then("\"It's over now,\" \"Document\" said, as \"Flow\" let go of \"Executor's\" body. ")
    .wait(5000).then("\"But it will never be over,\" \"Flow\" replied.")
    .wait(1000).then("\"I will always be with you, haunting you, until you finally snap and")
    .wait(1000).then("kill")
    .wait(1000).then("us")
    .wait(1000).then("ALL!\"")




