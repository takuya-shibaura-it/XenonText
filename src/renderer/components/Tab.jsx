/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FileStatus from './FileStatus';
import { setActiveDocumentId } from '../reducks/editor/actions';

/* タブの色 */
const activeTabColor = 'bg-gray-900';
const inactiveTabColor = 'bg-gray-800';

/* タブのタイトル色 */
const activeTabTitleColor = 'text-gray-300';
const inactiveTabTitleColor = 'text-gray-600';

export default function Tab(props) {
  const { title } = props;
  const { documentId } = props;
  const { isActive } = props;
  const dispatch = useDispatch();

  // タブ(FileStatus以外の場所)が押された時
  const onClick = () => {
    /* activeDocumentIdをストアにセット */
    dispatch(setActiveDocumentId(documentId));
  };

  let tabColor = inactiveTabColor;
  let tabTitleColor = inactiveTabTitleColor;
  if (isActive) {
    tabColor = activeTabColor;
    tabTitleColor = activeTabTitleColor;
  }

  return (
    <div
      className={`" h-8 w-40 flex flex-row items-center " ${tabColor}`}
      onClick={onClick}
    >
      <h2
        className={`" text-xs select-none my-1 ml-2 leading-6 w-full h-6 " ${tabTitleColor}`}
      >
        {title}
      </h2>
      <FileStatus documentId={documentId} />
    </div>
  );
}

Tab.propTypes = {
  documentId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
