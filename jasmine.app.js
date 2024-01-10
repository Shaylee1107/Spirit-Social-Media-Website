
describe('username tests', function(){
    it('username under 8 char', () => {
        expect(checkingUsername('ff')).toEqual(false); 
    })
    it('username over 8 char', () => {
        expect(checkingUsername('fffffffffffff')).toEqual(true);
    })
    it('username 8 char', () => {
        expect(checkingUsername('ffffffff')).toEqual(true);
    })
});
