// StoryCard: Displays a story preview with like and report buttons
export default function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col">
      {/* Story text or audio preview */}
      <div className="mb-2">
        {/* TODO: Show text or audio player */}
        <p className="text-gray-800">{story.text || 'Audio story preview...'}</p>
      </div>
      {/* Reactions and actions */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{story.reactions || 0} Likes</span>
          <button className="text-blue-500 hover:underline text-sm">Like</button>
        </div>
        <button className="text-red-500 hover:underline text-sm">Report</button>
      </div>
      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {/* TODO: Render language/category tags */}
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{story.language || 'en'}</span>
        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{story.category || 'General'}</span>
      </div>
    </div>
  );
} 