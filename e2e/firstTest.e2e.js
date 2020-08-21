describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have make text', async () => {
    await expect(element(by.text('Make Network Call'))).toBeVisible();
  });
});
