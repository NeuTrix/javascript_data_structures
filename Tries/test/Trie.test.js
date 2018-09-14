// var Trie = require('../Trie')
// var chai = require('chai');
// var expect = chai.expect;

// xdescribe('The Trie Class', () => {
  
//   let trie, root
//   before(() => {
//     trie = new Trie();
//     root = trie.rootNode;
//   });

//   afterEach(() => { 
//     trie = new Trie();
//     root = trie.rootNode;
//   });
  
//   it('... creates a new Trie object', () => {
//     expect(trie instanceof Trie).to.eql(true)
//     expect(trie).to.have.property('rootNode')
//   });
  
//   describe('=> The rootNode ...', () => {
    
//     it('... has a value of `*` ', () => {
//       expect(root.value).to.eql('*')
//     });

//     it('... has no parent', () => {
//       let test = Object.keys(root.parent).length;
//       expect(test).to.eql(0)
//     });
//   });

//   describe('=> The #insertString method ...', () =>{
    
//     it('... can add a new Node', () => {
//       let before = Object.keys(root.children)
//       trie.insertString('wonderful');
//       trie.insertString('winter');
//       trie.insertString('ample');
//       let after = Object.keys(root.children);
      
//       expect(before).to.have.lengthOf(0)
//       expect(after).to.have.lengthOf(2)
//     });

//     it('... transforms the letters into upperCase', () => {
//       trie.insertString('MIN')

//       let keys = Object.keys(root.children)
//       expect(keys).to.have.lengthOf(1)
//       expect(keys[0]).to.eql('M')
//     });

//     it('... has a correct value property', () => {
//       let arr = [ 'test', 'for', 'values']
//       arr.forEach(word => trie.insertString(word))
//       let kids = root.children
//       for (let letter in kids){
//         let value = kids[letter].value
//         expect(value).to.eql(letter)
//       }
//     });

//   });

//   describe('=> The #insertArray method ...', () =>{

//     it('... can add a new Node', () => {
//       let arr = ['aged', 'again', 'arrow', 'borrow','zoo', 'xyz', 'daddy']
//       let before = Object.keys(root.children)
//       trie.insertArray(arr);
//       let after = Object.keys(root.children);
//       expect(before).to.have.lengthOf(0)
//       expect(after).to.have.lengthOf(5)
//     });

//     it('... rejects an empty array', () => {
//       let arr = []
//       let test = trie.insertArray(arr)
//       expect(test).to.eql(false)
//     });
//   });

//   describe('=> The #find & #display functions', () => {

//     let arr = ['dad','age','aged','agedness','agile', 'again', 'arrow', 'daddy', 'sand', 'sandwich',
//     ]
//     let str = `Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the twelfth film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed, with a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay and Paul Rudd. It stars Rudd as Scott Lang / Ant-Man, alongside Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Tip "T.I." Harris, Anthony Mackie, Wood Harris, Judy Greer, David Dastmalchian, and Michael Douglas as Hank Pym. In Ant-Man, Lang must help defend Pym's Ant-Man shrinking technology and plot a heist with worldwide ramifications. Development of Ant-Man began in April 2006, with the hiring of Wright to direct and co-write with Cornish. By April 2011, Wright and Cornish had completed three drafts of the script and Wright shot test footage for the film in July 2012. Pre-production began in October 2013 after being put on hold so that Wright could complete The World's End. Casting began in December 2013, with the hiring of Rudd to play Lang. In May 2014, Wright left the project, citing creative differences, though he still received screenplay and story credits with Cornish, as well as an executive producer credit. The following month, Reed was brought in to replace Wright, while McKay was hired to contribute to the script with Rudd. Principal photography took place between August and December 2014 in San Francisco and Metro Atlanta.

// Ant-Man held its world premiere in Los Angeles on June 29, 2015, and was released in the United States on July 17, 2015, in 3D and IMAX 3D. It grossed more than $519 million worldwide, and received praise from critics, who heist welcomed the film's smaller stakes than preceding MCU installments, as well as its cast (particularly Rudd, Peña, Lilly, and Douglas), humor, and CGI sequences. A sequel, titled Ant-Man and the Wasp, was released on July 6, 2018. `
//   it('..prints the string', () => {
//     let arr2  = str.split(' ')
//     console.log(arr2)
//     trie.insertArray(arr2)
//     trie.print()
//     trie.find('heist')
      
//     });
//     // .join().toLowerCase().split(',').sort();
//     let clear;
//     beforeEach(() => {
//       arr.forEach (word => trie.insertString(word))
//       clear = `${'\n'.repeat(3)}`;
//     });

//     it('... displays a tree', () => {
//       console.log(`\n${clear} ${trie.display()}`)
//     });

//     it('... can turn off highlight for not-found words', () => {
//       trie.find('pickle');
//       let test = trie.find('sandwich');
//       expect(test).to.eql(true)
//     });

//     it('...finds substrings with proper endpoints', () => {
//       expect(trie.find('san')).to.eql(false)
//     });

//     it('... can highlight found words with matching first and last letters', () => {
//       // console.log(trie.rootNode.children['D'].children['A'].children['D'])
//       expect(trie.find('dad')).to.eql(true)
//     });

//     it('... can display full word (node val & child)', () => {
//       // let node = trie.rootNode
//       let node = trie.rootNode.children["D"]
//       let test = trie.print(node)
//       console.log(test)
//     });

//     it('print?', () => {
//       // print()
//     });

//   });

//   describe('=> The #remove function ', () => {
//   });

// });
