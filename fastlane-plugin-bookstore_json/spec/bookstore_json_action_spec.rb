describe Fastlane::Actions::BookstoreJsonAction do
  describe '#run' do
    it 'prints a message' do
      expect(Fastlane::UI).to receive(:message).with("The bookstore_json plugin is working!")

      Fastlane::Actions::BookstoreJsonAction.run(nil)
    end
  end
end
