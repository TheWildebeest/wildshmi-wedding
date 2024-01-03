import { Text } from "@/shared/components/Text";
import Link from "next/link";
import React, { FC } from "react";

const PhotosPage: FC = () => (
  <>
    <div className="max-w-[50em] mx-auto">
      <ul>
        <li style={{ marginBottom: "1em" }}>
          <Text size="M">
            💒
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://louisegoodeyphotography.pic-time.com/NtQPrYzAZYa3p"
            >
              Official Wedding photos
            </Link>{" "}
            — London, 26.08.2023
          </Text>
        </li>
        <li style={{ marginBottom: "1em" }}>
          <Text size="M">
            🌴
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/LHaridas/posts/pfbid0ZbnxLztUxHtQwr1Z7J9FDDEWjXjVAtZCHUmzgLYh1nsvSweeSeUdzwwSqYQJvhBnl"
            >
              India engagement ceremony
            </Link>{" "}
            — Thiruvananthapuram, 11.03.2023
          </Text>
        </li>
        <li style={{ marginBottom: "1em" }}>
          <Text size="M">
            💍
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/LHaridas/posts/pfbid0jyDKT6DMVHoUZspEBm5rX55Lm2ugMBKiuH9V258gvtu4ukyR1UWEGRbDrJgK4oGxl"
            >
              Proposal and engagement party
            </Link>{" "}
            — London, 14.02.2023
          </Text>
        </li>
      </ul>
    </div>
  </>
);

export default PhotosPage;
