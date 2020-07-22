describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have hello text', async () => {
    await expect(element(by.text('Hello'))).toBeVisible();
  });
});
