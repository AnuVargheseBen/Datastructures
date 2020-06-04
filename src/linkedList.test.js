import LinkedList from './linkedList';

describe('LinkedList', () => {
  it('should insert at begining', () => {
    const list = new LinkedList();
    list.insertData(100);
    list.insertData(300);
    expect(list.toArray()).toEqual([300, 100]);
  });

  it('should insert at end', () => {
    const list = new LinkedList();
    list.insertLast(400);
    list.insertLast(600);
    expect(list.toArray()).toEqual([400, 600]);
  });

  it('should insert at index', () => {
    const list = new LinkedList();
    list.insertData(345);
    list.insertData(450);
    list.insertAt(234, 1);
    expect(list.toArray()).toEqual([450, 234, 345]);

    list.insertAt(12, 0);
    expect(list.toArray()).toEqual([12, 450, 234, 345]);

    list.insertAt(15, 3);
    expect(list.toArray()).toEqual([12, 450, 234, 15, 345]);

    expect(() => list.insertAt(45, 5)).toThrow('Index out of range');
  });
  it('should delete at index' , () =>{
    const list = new LinkedList();
    list.insertData(234);
    list.insertData(456);
    list.insertLast(432);
    expect(list.toArray()).toEqual([456,234,432]);

    list.removeData(2);
    expect(() => list.removeData(6).toThrow('Index out of range'));
  })
});
