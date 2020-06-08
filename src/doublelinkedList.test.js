import doubleLinkedList from './doubleLinkedList';
import DoubleLinkedList from './doubleLinkedList';

describe('doubleLinkedList', () => {
  it('should insert at head', () => {
    const list = new DoubleLinkedList();
    list.insertHead(45);
    list.insertHead(23);
    expect(list.toArray()).toEqual([23, 45]);
  });

  it('should insert at tail', () => {
    const list = new DoubleLinkedList();
    list.insertTail(55);
    list.insertTail(33);
    expect(list.toArray()).toEqual([55, 33]);
  });

  it('should delete at index', () => {
    const list = new DoubleLinkedList();
    list.insertTail(55);
    list.insertTail(33);
    list.insertHead(23);
    list.insertHead(36);
    expect(list.toArray()).toEqual([36, 23, 55, 33]);

    list.deleteAt(2);
    expect(() => list.removeData(6).toThrow('Index out of range'));
  });
  
  it('should search data', () => {
    const list = new DoubleLinkedList();
    list.insertTail(55);
    list.insertTail(33);
    list.insertHead(23);
    list.insertHead(36);
    expect(list.toArray()).toEqual([36, 23, 55, 33]);

    expect(list.search(36)).toBe(36);
    expect(list.search(550)).toBe(null);

  });

  it('should be',()=>{
    const list = new doubleLinkedList();
    list.insertTail(50);
    list.insertTail(51);
    list.insertTail(52);
    list.insertTail(53);
    list.insertTail(54);
    list.insertTail(55);

    expect(list.toArray()).toEqual([50,51,52,53,54,55]);

    list.deleteAt(1);
    list.deleteAt(0);
    list.deleteAt(2);
    list.insertHead(49);
    expect(list.toArray()).toEqual([49,52,53,55]);
  })
});
